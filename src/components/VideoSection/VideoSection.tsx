import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { VideoContainer, VideoSectionContainer } from "./VideoSection.styled"
// import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5"
// Import videos as Vite assets to ensure they're included in the build
// eslint-disable-next-line import/no-unresolved
import videoDesktopNoTextUrl from "/public/video/2025_DCL_Art_Week_Promo_Video_1920x1080_No_sound.mp4"
// eslint-disable-next-line import/no-unresolved
import videoMobileUrl from "/public/video/2025_DCL_Art_Week_Promo_Video_1080x1080_No_sound.mp4"

// Handle base URL for production deployments
const baseUrl = import.meta.env.VITE_BASE_URL || ""
const videoDesktopNoText = baseUrl
  ? `${baseUrl}/${videoDesktopNoTextUrl}`
  : videoDesktopNoTextUrl
const videoMobile = baseUrl ? `${baseUrl}/${videoMobileUrl}` : videoMobileUrl

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
          preload="metadata"
          src={isMobile ? videoMobile : videoDesktopNoText}
        />
      </VideoContainer>
    </VideoSectionContainer>
  )
}

export { VideoSection }
