import { styled } from 'styled-components';
import { breakpoints, theme } from '../../utils/theme';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  max-height: 72px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(252, 252, 252, 0.25);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  will-change: transform;
  transition: all 300ms;
  backdrop-filter: blur(6px);

  @media (min-width: ${breakpoints.l}) {
    padding: 20px 40px;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 20px 60px;
  }

  .navbar-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
      max-width: 72px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 220px;
    max-height: 50px;
    object-fit: contain;
  }

  .navbar-desktop {
    display: none;
    width: 100%;

    @media (min-width: ${breakpoints.l}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 40px;

    .navbar-navigation {
      display: none;
      align-items: center;
      gap: 40px;
      list-style-type: none;
      text-transform: none !important;

      @media (min-width: ${breakpoints.l}) {
        display: flex;
      }

      li {
        a {
          text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
          padding: 2px 4px;
        }
      }
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;
    justify-content: start;

    gap: 16px;

    .decentraland-logo {
      display: none;
      width: 160px;

      @media (min-width: ${breakpoints.xxl}) {
        display: block;
      }

      img {
        margin: 4px 16px 0 0;
        object-fit: cover;
        height: 100%;
      }
    }
  }
`;

const SocialNavbarIcon = styled.a`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;

  @media (min-width: ${breakpoints.xl}) {
    width: 52px;
    height: 52px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${theme.white};

    @media (min-width: ${breakpoints.xl}) {
      width: 24px;
      height: 24px;
    }
  }
`;

const MenuIcon = styled.button`
  background-color: #60646b;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  @media (min-width: ${breakpoints.l}) {
    display: none;
  }

  svg {
    width: 12px;
    height: 12px;
    fill: #fff;

    &.close {
      width: 20px;
      height: 20px;
    }
  }
`;

const MobileMenuContainer = styled.div<{ $menuOpen: boolean }>`
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;
  background: rgba(252, 252, 252, 0.25);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  overflow: hidden;
  opacity: ${(props) => (props.$menuOpen ? 1 : 0)};
  height: ${(props) => (props.$menuOpen ? 'auto' : '0')};
  transform: scaleY(${(props) => (props.$menuOpen ? 1 : 0)});
  transform-origin: top left;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  .mobile-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
  }

  .mobile-socials {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 16px;
    border-top: 1px solid #60646b;

    .decentraland-logo {
      margin-top: 4px;
      max-width: 200px;
    }
  }

  @media (min-width: ${breakpoints.l}) {
    display: none;
  }
`;

export { NavbarContainer, SocialNavbarIcon, MenuIcon, MobileMenuContainer };
