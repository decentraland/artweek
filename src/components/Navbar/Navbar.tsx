import { useEffect } from 'react';
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
import { ROUTES, socialLinks } from './routes';

const BASE_DELAY = 0.15;

const Navbar = () => {
  const { isMobile, menuOpen, setMenuOpen } = useResizePage({ size: 992 });

  const handleNavigation = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

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
          <nav className="navbar-mobile">
            <a href="#">
              <img src={artWeekLogoLight} alt="art-week-logo" />
            </a>
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
          </nav>
        ) : (
          <nav className="navbar-desktop">
            <div className="navbar-left">
              <a href="#">
                <img src={artWeekLogoLight} alt="art-week-logo" />
              </a>
              <ul className="navbar-navigation">
                {Object.values(ROUTES).map((route) => (
                  <li key={route.href}>
                    <AnimatedNavLink
                      href={route.href}
                      delay={BASE_DELAY * 2}
                      menuOpen={true}
                    >
                      {route.label}
                    </AnimatedNavLink>
                  </li>
                ))}
              </ul>
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
              {socialLinks.map((link, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: BASE_DELAY + 0.2 * (index + 2),
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  <SocialNavbarIcon
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </SocialNavbarIcon>
                </motion.span>
              ))}
            </div>
          </nav>
        )}
      </NavbarContainer>
      {isMobile && (
        <MobileMenuContainer $menuOpen={menuOpen}>
          <ul className="mobile-links">
            <li onClick={handleNavigation}>
              <AnimatedNavLink href="#about" delay={0.15} menuOpen={menuOpen}>
                About
              </AnimatedNavLink>
            </li>
            <li onClick={handleNavigation}>
              <AnimatedNavLink href="#faq" delay={0.35} menuOpen={menuOpen}>
                FAQs
              </AnimatedNavLink>
            </li>
          </ul>
          <div className="mobile-socials">
            {Object.values(socialLinks).map((link) => (
              <SocialNavbarIcon
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </SocialNavbarIcon>
            ))}

            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              href="https://decentraland.org/?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw&utm_term=header"
              target="_blank"
              rel="noopener noreferrer"
              className="decentraland-logo"
            >
              <img src={dclLogoLight} alt="decentraland-logo" />
            </motion.a>
          </div>
        </MobileMenuContainer>
      )}
    </>
  );
};

export { Navbar };
