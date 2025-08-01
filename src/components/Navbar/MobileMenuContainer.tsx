import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface MobileMenuContainerProps {
  menuOpen: boolean;
  children: ReactNode;
}

const MobileMenuContainer = ({
  menuOpen,
  children,
}: MobileMenuContainerProps) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }, [menuOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -10 }}
      animate={
        menuOpen
          ? { opacity: 1, height: 'auto', y: 0 }
          : { opacity: 0, height: 0, y: -10 }
      }
      exit={{ opacity: 0, height: 0, y: -10 }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
        height: { duration: 0.3 },
        opacity: { duration: 0.2 },
      }}
      style={{
        position: 'absolute',
        top: '72px',
        left: 0,
        width: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        zIndex: 1000,
        background: 'rgba(252, 252, 252, 0.25)',
        border: '0.5px solid rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        overflow: 'hidden',
      }}
    >
      {children}
    </motion.div>
  );
};

export { MobileMenuContainer };
