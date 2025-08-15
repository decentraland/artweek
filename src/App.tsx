// Styled Components
import { useEffect } from "react"
import { About } from "./components/About/About"
import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Marquee } from "./components/Marquee/Marquee"
import { MarqueeContainerWrapper } from "./components/Marquee/Marquee.styled"
import { Navbar } from "./components/Navbar/Navbar"
import { config } from "./config"
import { useLenis } from "./hooks/useLenis"
// Components
// CSS
import "./css/global.css"
import { getAnalytics } from "./modules/analytics/segment"
import { AppContainer } from "./App.styled"
// import Installations from './components/Installations';

// Lazy load VideoSection component
// const VideoSection = lazy(() =>
//   import("./components/VideoSection/VideoSection").then((module) => ({
//     default: module.VideoSection,
//   }))
// )

// Loading fallback component
// const VideoSectionLoader = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#000",
//         color: "#fff",
//         fontSize: "18px",
//       }}
//     >
//       Cargando video...
//     </div>
//   )
// }

const App = () => {
  // Initialize Lenis smooth scrolling
  useLenis()

  useEffect(() => {
    // Initialize analytics after component mounts to avoid race conditions
    const initializeAnalytics = () => {
      const analytics = getAnalytics()
      if (analytics) {
        analytics.load(config.get("SEGMENT_API_KEY"))
        analytics.page()
      }
    }

    // Small delay to ensure snippet is fully loaded
    const timer = setTimeout(initializeAnalytics, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      <AppContainer>
        <Hero />
        <MarqueeContainerWrapper>
          <Marquee variant="light" />
        </MarqueeContainerWrapper>
        <About />
        {/* <Installations />
        <MarqueeContainerWrapper>
          <Marquee variant="light" />
        </MarqueeContainerWrapper> */}
        <Faq />
        <Footer />
      </AppContainer>
    </div>
  )
}

export { App }
