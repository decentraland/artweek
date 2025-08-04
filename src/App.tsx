// Styled Components
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
// Components
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
// CSS
import './css/global.css';
import { config } from './config';
import { getAnalytics } from './modules/analytics/segment';
import { AppContainer } from './App.styled';
import { MarqueeContainerWrapper } from './components/Marquee/Marquee.styled';
import { Marquee } from './components/Marquee/Marquee';
import About from './components/About/About';

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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis para scroll suave
    lenisRef.current = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Función para actualizar Lenis en cada frame
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };

    // Iniciar el loop de animación
    requestAnimationFrame(raf);

    // Limpiar al desmontar
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    // Initialize analytics after component mounts to avoid race conditions
    const initializeAnalytics = () => {
      const analytics = getAnalytics();
      if (analytics) {
        analytics.load(config.get('SEGMENT_API_KEY'));
        analytics.page();
      }
    };

    // Small delay to ensure snippet is fully loaded
    const timer = setTimeout(initializeAnalytics, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <AppContainer>
        <Hero />
        <MarqueeContainerWrapper>
          <Marquee variant="light" />
        </MarqueeContainerWrapper>
        <About />

        {/* <Carousel /> */}

        {/* <About /> */}

        {/* <Schedule /> */}

        {/* <Suspense fallback={<VideoSectionLoader />}>
          <VideoSection />
        </Suspense> */}

        <Footer />
      </AppContainer>
    </div>
  );
};

export { App };
