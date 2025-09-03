import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { VideoContainer, VideoSectionContainer } from "./VideoSection.styled"

const videoDesktopNoTextUrl =
  "https://marketing-files.decentraland.org/uploads/1756887273123_2025_DCL_Art_Week_Promo_Video_1920x1080_No_sound.mp4"
const videoMobileUrl =
  "https://marketing-files.decentraland.org/uploads/1756887272986_2025_DCL_Art_Week_Promo_Video_1080x1080_No_sound.mp4"

const VideoSection = () => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  )
  const [isMobile, setIsMobile] = useState(false)
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

    if (inView) {
      videoElement.muted = true
      videoElement.play().catch((error) => {
        console.error("Error al reproducir el video:", error)
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
        <video
          ref={setRefs}
          loop
          playsInline
          muted
          preload="metadata"
          src={isMobile ? videoMobileUrl : videoDesktopNoTextUrl}
        />
      </VideoContainer>
    </VideoSectionContainer>
  )
}

export { VideoSection }
