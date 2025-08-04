import { FaLinkedinIn } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import artWeekLogo from '../../../public/img/logos/art-week-logo-white.png';
import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  SocialFooterIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img
          className="footer__logo-img"
          src={artWeekLogo}
          alt="ArtWeek Logo"
        />

        <a
          href="https://decentraland.org/terms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Services
        </a>
        <a
          href="https://decentraland.org/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </FooterLeft>
      <FooterRight>
        <SocialFooterIcon
          href="https://x.com/decentraland"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </SocialFooterIcon>
        <SocialFooterIcon
          href="https://decentraland.org/discord/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
        </SocialFooterIcon>
        <SocialFooterIcon
          href="https://www.linkedin.com/company/decentralandorg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </SocialFooterIcon>
      </FooterRight>
    </FooterContainer>
  );
};

export { Footer };
