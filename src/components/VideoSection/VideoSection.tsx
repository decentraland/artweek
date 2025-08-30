import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
// import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5"
import { VideoContainer, VideoSectionContainer } from "./VideoSection.styled"

// Rutas de los videos usando VITE_BASE_URL
const baseUrl = import.meta.env.VITE_BASE_URL || ""
const videoDesktopNoText = `${baseUrl}public/video/2025_DCL_Art_Week_Promo_Video_1920x1080_No_sound.mp4`
const videoMobile = `${baseUrl}public/video/2025_DCL_Art_Week_Promo_Video_1080x1080_No_sound.mp4`

const VideoSection = () => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  )
  const [isMobile, setIsMobile] = useState(false)
  // const [isMuted, setIsMuted] = useState(true)
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

  // useEffect(() => {
  //   if (!videoElement) return
  //   // videoElement.muted = isMuted
  // }, [videoElement])

  useEffect(() => {
    if (!videoElement) return

    if (inView) {
      // Ensure video is muted for mobile autoplay
      videoElement.muted = true
      videoElement.play().catch((error) => {
        console.error("Error al reproducir el video:", error)
        // Try to play again after a short delay for mobile devices
        setTimeout(() => {
          videoElement.play().catch((e) => {
            console.error(
              "Error al reproducir el video después del reintento:",
              e
            )
          })
        }, 100)
      })
    } else {
      videoElement.pause()
    }
  }, [inView, videoElement])

  return (
    <VideoSectionContainer>
      <VideoContainer>
        {/* <button className="mute-button" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
        </button> */}
        <video
          ref={setRefs}
          loop
          playsInline
          muted
          webkit-playsinline="true"
          preload="metadata"
          src={isMobile ? videoMobile : videoDesktopNoText}
        />
      </VideoContainer>
    </VideoSectionContainer>
  )
}

export { VideoSection }
