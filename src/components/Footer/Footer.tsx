import { useRef } from "react"
// import { FaLinkedinIn } from 'react-icons/fa';
import { motion, useInView } from "framer-motion"
import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6"
import artWeekLogo from "../../../public/img/logos/art-week-logo-white.png"
import { AnimatedNavLink } from "../Navbar/AnimatedNavLink"
import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  SocialFooterIcon,
} from "./Footer.styled"

const BASE_DELAY = 0.15

const socialLinks = [
  {
    href: "https://x.com/decentraland",
    icon: <FaXTwitter />,
  },
  {
    href: "https://decentraland.org/discord/",
    icon: <FaDiscord />,
  },
  {
    href: "https://www.instagram.com/decentraland_foundation/",
    icon: <FaInstagram />,
  },
]

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: true })
  return (
    <FooterContainer ref={footerRef}>
      <FooterLeft>
        <img
          className="footer__logo-img"
          src={artWeekLogo}
          alt="ArtWeek Logo"
        />

        <AnimatedNavLink
          href="https://decentraland.org/terms/"
          target="_blank"
          menuOpen={isInView}
          delay={BASE_DELAY}
        >
          Terms of Service
        </AnimatedNavLink>
        <AnimatedNavLink
          href="https://decentraland.org/privacy/"
          target="_blank"
          menuOpen={isInView}
          delay={BASE_DELAY + 0.2}
        >
          Privacy Policy
        </AnimatedNavLink>
      </FooterLeft>
      <FooterRight>
        {socialLinks.map((link, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{
              delay: isInView ? BASE_DELAY + 0.2 * (index + 2) : 0,
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            <SocialFooterIcon
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </SocialFooterIcon>
          </motion.span>
        ))}
      </FooterRight>
    </FooterContainer>
  )
}

export { Footer }
