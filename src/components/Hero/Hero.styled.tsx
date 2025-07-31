import { styled } from 'styled-components';
import bgImage from '../../../public/img/hero/hero-bg.jpg';
import { breakpoints, theme } from '../../utils/theme';

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${bgImage});
  background-position: 57% 47%;
  background-size: 200%;

  @media (min-width: 640px) {
    background-position: 48% 50%;
    background-size: 170%;
  }

  @media (min-width: 1024px) {
    background-position: 37% 55%;
    background-size: 140%;
  }

  @media (min-width: 1280px) {
    background-position: 25% 55%;
    background-size: 100%;
  }

  @media (min-width: 1440px) {
    background-position: 5% 55%;
    background-size: 100%;
  }
`;

const HeroInnerContainer = styled.div`
  width: 100%;
  height: auto;
  /* max-width: 1240px; */
  margin: 0 auto;
  color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  position: relative;
  padding: 0px 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 0px 70px;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 0px 100px;
  }

  .hero-top {
    width: 100%;
    height: 100%;
    max-width: 750px;

    .hero-date {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 40px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-info {
      font-size: 16px;
      font-weight: 700;
      color: ${theme.white};
      margin-top: 5px;
      margin-bottom: 20px;
    }
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

const HeroTextContainerLeft = styled.div`
  width: fit-content;
  height: 100%;
  max-width: 750px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 6px 16px;
  border: 2px solid ${theme.white};

  p {
    font-size: 10px;
    font-weight: 700;
    text-align: center;
  }

  &.background-fill-white {
    background-color: ${theme.white};

    p {
      color: ${theme.darkGray};
    }
  }

  &.background-transparent {
    background-color: transparent;

    p {
      color: ${theme.white};
    }
  }

  @media (min-width: 568px) {
    p {
      font-size: 14px;
    }
  }
`;

const HeroTextContainerCenter = styled.div`
  width: fit-content;
  height: 100%;
  max-width: 750px;
  background-color: transparent;
  padding: 6px 16px;
  border: 2px solid ${theme.white};

  p {
    font-size: 10px;
    font-weight: 700;
    text-align: center;
  }

  &.background-fill-white {
    background-color: ${theme.white};

    p {
      color: ${theme.darkGray};
    }
  }

  &.background-transparent {
    background-color: transparent;

    p {
      color: ${theme.white};
    }
  }

  @media (min-width: 568px) {
    p {
      font-size: 14px;
    }
  }
`;

const HeroTextContainerRight = styled.div`
  width: fit-content;
  height: 100%;
  max-width: 750px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 6px 16px;
  border: 2px solid ${theme.white};

  p {
    font-size: 10px;
    font-weight: 700;
    text-align: center;
  }

  &.background-fill-white {
    background-color: ${theme.white};

    p {
      color: ${theme.darkGray};
    }
  }

  &.background-transparent {
    background-color: transparent;

    p {
      color: ${theme.white};
    }
  }

  @media (min-width: 568px) {
    p {
      font-size: 14px;
    }
  }
`;

export {
  HeroContainer,
  HeroInnerContainer,
  HeroTextContainer,
  HeroTextContainerLeft,
  HeroTextContainerCenter,
  HeroTextContainerRight,
};
