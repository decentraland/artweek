import { FaLinkedinIn } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { SlMenu } from 'react-icons/sl';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useResizePage } from '../../hooks/useResizePage';
import dclLogoLight from '../../../public/img/logos/dcl-logo-light.png';
import artWeekLogoLight from '../../../public/img/logos/art-week-logo-white.png';
import {
  MenuIcon,
  NavbarContainer,
  SocialNavbarIcon,
  MobileMenuContainer,
} from './Navbar.styled';
import { AnimatedNavLink } from './AnimatedNavLink';
import { useEffect } from 'react';

const Navbar = () => {
  const { isMobile, menuOpen, setMenuOpen } = useResizePage({ size: 992 });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    });
  }, []);

  return (
    <>
      <NavbarContainer>
        {isMobile ? (
          <div className="navbar-mobile">
            <img src={artWeekLogoLight} alt="art-week-logo" />
            <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <IoMdClose className="close" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <SlMenu />
                </motion.span>
              )}
            </MenuIcon>
          </div>
        ) : (
          <div className="navbar-desktop">
            <div className="navbar-left">
              <img src={artWeekLogoLight} alt="art-week-logo" />
              <div className="navbar-navigation"></div>
            </div>

            <div className="navbar-right">
              <a
                href="https://decentraland.org/?utm_org=dcl&utm_source=landing&utm_medium=organic&utm_campaign=careerquest"
                target="_blank"
                rel="noopener noreferrer"
                className="decentraland-logo"
              >
                <img src={dclLogoLight} alt="decentraland-logo" />
              </a>
              <SocialNavbarIcon
                href="https://x.com/decentraland"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </SocialNavbarIcon>
              <SocialNavbarIcon
                href="https://decentraland.org/discord/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </SocialNavbarIcon>
              <SocialNavbarIcon
                href="https://www.linkedin.com/company/decentralandorg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </SocialNavbarIcon>
            </div>
          </div>
        )}
      </NavbarContainer>
      {isMobile && (
        <MobileMenuContainer $menuOpen={menuOpen}>
          <div className="mobile-links">
            <AnimatedNavLink href="#about" delay={0.15} menuOpen={menuOpen}>
              About
            </AnimatedNavLink>
            <AnimatedNavLink href="#schedule" delay={0.25} menuOpen={menuOpen}>
              Schedule
            </AnimatedNavLink>
            <AnimatedNavLink href="#workshops" delay={0.35} menuOpen={menuOpen}>
              Workshops
            </AnimatedNavLink>
            <AnimatedNavLink href="#advice" delay={0.45} menuOpen={menuOpen}>
              Advice
            </AnimatedNavLink>
            <AnimatedNavLink href="#faq" delay={0.55} menuOpen={menuOpen}>
              FAQ
            </AnimatedNavLink>
          </div>
          <div className="mobile-socials">
            <SocialNavbarIcon
              href="https://x.com/decentraland"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </SocialNavbarIcon>
            <SocialNavbarIcon
              href="https://decentraland.org/discord/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </SocialNavbarIcon>
            <SocialNavbarIcon
              href="https://www.linkedin.com/company/decentralandorg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </SocialNavbarIcon>

            <a
              href="https://decentraland.org/?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw&utm_term=header"
              target="_blank"
              rel="noopener noreferrer"
              className="decentraland-logo"
            >
              <img src={dclLogoLight} alt="decentraland-logo" />
            </a>
          </div>
        </MobileMenuContainer>
      )}
    </>
  );
};

export { Navbar };
