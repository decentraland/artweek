import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5"
import { VideoContainer, VideoSectionContainer } from "./VideoSection.styled"

// Rutas de los videos usando VITE_BASE_URL
const baseUrl = import.meta.env.VITE_BASE_URL || ""
const videoDesktopNoText = `${baseUrl}/videos/teaser-desktop-no-text.mp4`
const videoMobile = `${baseUrl}/videos/teaser-mobile.mp4`

const VideoSection = () => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  )
  const [isMobile, setIsMobile] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
  })

  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      setVideoElement(node)
      inViewRef(node)
    },
    [inViewRef]
  )

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth <= 568
      setIsMobile(mobileWidth)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (!videoElement) return
    videoElement.muted = isMuted
  }, [isMuted, videoElement])

  useEffect(() => {
    if (!videoElement) return

    if (inView) {
      videoElement.play().catch((error) => {
        console.error("Error al reproducir el video:", error)
        if (error.name === "NotAllowedError") {
          videoElement.play().catch((e) => {
            console.error("Error al reproducir el video silenciado:", e)
          })
        }
      })
    } else {
      videoElement.muted = true
      videoElement.pause()
    }
  }, [inView, videoElement])

  return (
    <VideoSectionContainer>
      <VideoContainer>
        <button className="mute-button" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
        </button>
        <video
          ref={setRefs}
          loop
          playsInline
          muted={isMuted}
          src={isMobile ? videoMobile : videoDesktopNoText}
        />
      </VideoContainer>
    </VideoSectionContainer>
  )
}

export { VideoSection }
