import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

interface UseLenisReturn {
  lenis: Lenis | null;
  start: () => void;
  stop: () => void;
  isRunning: boolean;
}

export const useLenis = (): UseLenisReturn => {
  const lenisRef = useRef<Lenis | null>(null);
  const isRunningRef = useRef<boolean>(false);
  const rafRef = useRef<number | null>(null);

  const raf = useCallback((time: number) => {
    lenisRef.current?.raf(time);
    rafRef.current = requestAnimationFrame(raf);
  }, []);

  const start = useCallback(() => {
    if (lenisRef.current && !isRunningRef.current) {
      lenisRef.current.start();
      isRunningRef.current = true;
      rafRef.current = requestAnimationFrame(raf);
    }
  }, [raf]);

  const stop = useCallback(() => {
    if (lenisRef.current && isRunningRef.current) {
      lenisRef.current.stop();
      isRunningRef.current = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }
  }, []);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Start smooth scrolling by default
    start();

    // Cleanup on unmount
    return () => {
      stop();
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [start, stop]);

  return {
    lenis: lenisRef.current,
    start,
    stop,
    isRunning: isRunningRef.current,
  };
};

export default useLenis;
