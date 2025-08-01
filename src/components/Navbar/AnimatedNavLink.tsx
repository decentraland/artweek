import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedNavLinkProps {
  href: string;
  delay: number;
  menuOpen: boolean;
  children: ReactNode;
}

const AnimatedNavLink = ({
  href,
  delay,
  menuOpen,
  children,
}: AnimatedNavLinkProps) => {
  return (
    <motion.a
      href={href}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: menuOpen ? 0 : -20, opacity: menuOpen ? 1 : 0 }}
      transition={{ delay: menuOpen ? delay : 0, duration: 0.2 }}
      style={{
        textDecoration: 'none',
        color: '#fff',
        fontSize: '16px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}
    >
      {children}
    </motion.a>
  );
};

export { AnimatedNavLink };
