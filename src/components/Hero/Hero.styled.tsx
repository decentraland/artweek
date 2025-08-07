import { styled } from 'styled-components';
import bgImage from '../../../public/img/hero/hero-bg-new.png';
import { breakpoints } from '../../utils/theme';

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  min-height: 100dvh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${breakpoints.md}) {
    padding: 24px;
    align-items: center;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

const HeroInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  text-align: start;
  justify-content: flex-start;
  position: relative;
  top: 50%;
  z-index: 2;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
    text-align: center;
  }

  .hero-top {
    letter-spacing: 1em;

    h2 {
      font-weight: 500;
      letter-spacing: 12px;
    }
  }

  .hero-middle {
    margin-block: 24px;

    h3 {
      font-size: 1.4rem;
    }

    p {
      opacity: 0.9;
      margin-block: 8px 12px;
      font-size: 1rem;
    }

    img {
      width: 100%;
      margin-top: 16px;
    }
  }

  .hero-bottom {
    width: 100%;

    *:is(a) {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    top: unset;
  }
`;

export { HeroContainer, HeroInnerContainer };
