import { ReactNode } from "react"
import { AnimatedCharacters } from "../animatedCharacters"

interface AnimatedNavLinkProps {
  href?: string
  delay: number
  menuOpen: boolean
  children: ReactNode
  target?: string
}

const AnimatedNavLink = ({
  href,
  delay,
  menuOpen,
  children,
  target,
}: AnimatedNavLinkProps) => {
  return (
    <a
      href={href ?? "#"}
      style={{
        display: "inline-block",
      }}
      target={target}
      rel="noopener noreferrer"
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
  )
}

export { AnimatedNavLink }
