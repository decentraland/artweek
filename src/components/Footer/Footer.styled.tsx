import { styled } from 'styled-components';
import { breakpoints, theme } from '../../utils/theme';

const FooterContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: ${theme.black};
  width: 100%;
  border-top: 0.5px solid ${theme.white};

  @media (min-width: ${breakpoints.md}) {
    padding: 20px 40px;
    align-items: center;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 20px 60px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }

  p {
    font-size: 14px;
    font-weight: 700;
    color: ${theme.white};
  }
`;

const LogoImage = styled.img`
  height: 32px;
  width: auto;
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const SocialFooterIcon = styled.a`
  background-color: ${theme.white};
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

    @media (min-width: ${breakpoints.xl}) {
      width: 24px;
      height: 24px;
    }

    fill: ${theme.darkGray};
  }
`;

export {
  FooterContainer,
  FooterLeft,
  LogoImage,
  FooterRight,
  SocialFooterIcon,
};
