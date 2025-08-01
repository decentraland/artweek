import { FaLinkedinIn } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { SlMenu } from 'react-icons/sl';
import { useResizePage } from '../../hooks/useResizePage';
import dclLogoLight from '../../../public/img/logos/dcl-logo-light.png';
import artWeekLogoLight from '../../../public/img/logos/art-week-logo-white.png';
import { motion } from 'framer-motion';
import {
  MenuIcon,
  NavbarContainer,
  SocialNavbarIcon,
} from './Navbar.styled';
import { AnimatedNavLink } from './AnimatedNavLink';
import { MobileMenuContainer } from './MobileMenuContainer';

const Navbar = () => {
  const { isMobile, menuOpen, setMenuOpen } = useResizePage({ size: 992 });

  return (
    <>
      <NavbarContainer>
        {isMobile ? (
          <div className="navbar-mobile">
            <img src={artWeekLogoLight} alt="art-week-logo" />
            <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
              <SlMenu />
            </MenuIcon>
          </div>
        ) : (
          <div className="navbar-desktop">
            <div className="navbar-left">
              <img src={artWeekLogoLight} alt="art-week-logo" />
              <div className="navbar-navigation">
                {/* <span>
                  <a href="#about">About</a>
                </span> */}
              </div>
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
        <MobileMenuContainer menuOpen={menuOpen}>
          <motion.div 
            className="mobile-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: menuOpen ? 1 : 0 }}
            transition={{ delay: menuOpen ? 0.1 : 0, duration: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <AnimatedNavLink href="#about" delay={0.15} menuOpen={menuOpen}>
              About
            </AnimatedNavLink>
            <AnimatedNavLink href="#schedule" delay={0.2} menuOpen={menuOpen}>
              Schedule
            </AnimatedNavLink>
            <AnimatedNavLink href="#workshops" delay={0.25} menuOpen={menuOpen}>
              Workshops
            </AnimatedNavLink>
            <AnimatedNavLink href="#advice" delay={0.3} menuOpen={menuOpen}>
              Advice
            </AnimatedNavLink>
            <AnimatedNavLink href="#faq" delay={0.35} menuOpen={menuOpen}>
              FAQ
            </AnimatedNavLink>
          </motion.div>
          <motion.div 
            className="mobile-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: menuOpen ? 1 : 0 }}
            transition={{ delay: menuOpen ? 0.2 : 0, duration: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingTop: '16px',
              borderTop: '1px solid #60646b'
            }}
          >
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
              style={{
                marginTop: '4px',
                maxWidth: '200px'
              }}
            >
              <img src={dclLogoLight} alt="decentraland-logo" />
            </a>
          </motion.div>
        </MobileMenuContainer>
      )}
    </>
  );
};

export { Navbar };
