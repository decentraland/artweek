// Styled Components
import { Suspense, lazy, useEffect } from "react"
import { About } from "./components/About/About"
import { BiggerPictureSection } from "./components/BiggerPictureSection"
import { CreditList } from "./components/CreditList"
import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Installations } from "./components/Installations"
import { MapSection } from "./components/MapSection"
import { Marquee } from "./components/Marquee/Marquee"
import { MarqueeContainerWrapper } from "./components/Marquee/Marquee.styled"
import { Navbar } from "./components/Navbar/Navbar"
import { Partners } from "./components/Partners"
import { Schedule } from "./components/Schedule"
import { config } from "./config"
import { useLenis } from "./hooks/useLenis"
// Components
// CSS
import "./css/global.css"
import {
  getAnalytics,
  shouldEnableAnalytics,
} from "./modules/analytics/segment"
import { AppContainer } from "./App.styled"
// import { VideoSection } from './components/VideoSection/VideoSection';

// Lazy load VideoSection component
const VideoSection = lazy(() =>
  import("./components/VideoSection/VideoSection").then((module) => ({
    default: module.VideoSection,
  }))
)

// Loading fallback component
const VideoSectionLoader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "18px",
      }}
    >
      Loading video...
    </div>
  )
}
const App = () => {
  // Initialize Lenis smooth scrolling
  useLenis()

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        if (!shouldEnableAnalytics()) return
        await import("./modules/analytics/snippet")
        const analytics = getAnalytics()
        const key = config.get("SEGMENT_API_KEY")
        if (!analytics || !key) return
        analytics.load(key)
        analytics.page()
      } catch {
        /* swallow analytics errors */
      }
    }

    const timer = setTimeout(initializeAnalytics, 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      <AppContainer>
        {/* 1. Hero */}
        <Hero />
        <MarqueeContainerWrapper>
          <Marquee variant="light" />
        </MarqueeContainerWrapper>

        {/* 2. Video */}
        <Suspense fallback={<VideoSectionLoader />}>
          <VideoSection />
        </Suspense>

        {/* 3. About - Experience Art Week (Download DCL button) */}
        <About />

        {/* 4. Partner Logos */}
        <Partners />
        <MarqueeContainerWrapper>
          <Marquee variant="light" />
        </MarqueeContainerWrapper>

        {/* 5. Schedule */}
        <Schedule />

        {/* 6. Installations */}
        <Installations />

        {/* 7. Map (Download DCL button) */}
        <MapSection />

        {/* 8. Bigger Picture Map */}
        <BiggerPictureSection />

        {/* 9. Credit List (Download DCL button) */}
        <CreditList />
        <MarqueeContainerWrapper>
          <Marquee variant="light" />
        </MarqueeContainerWrapper>

        {/* 10. FAQs */}
        <Faq />
        <Footer />
      </AppContainer>
    </div>
  )
}

export { App }
