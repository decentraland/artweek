import { ReactNode } from 'react';
import { AnimatedCharacters } from '../animatedCharacters';

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
    <a
      href={href}
      style={{
        textDecoration: 'none',
        color: '#fff',
        fontSize: '16px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'inline-block',
      }}
    >
      <AnimatedCharacters
        isVisible={menuOpen}
        delay={delay}
        duration={0.3}
        ease="easeOut"
      >
        {children}
      </AnimatedCharacters>
    </a>
  );
};

export { AnimatedNavLink };
