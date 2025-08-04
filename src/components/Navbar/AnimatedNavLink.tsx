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
