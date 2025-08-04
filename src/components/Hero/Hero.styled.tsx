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
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${breakpoints.md}) {
    padding: 24px;
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
  align-items: flex-start;

  justify-content: flex-start;
  position: relative;
  top: 50%;
  z-index: 2;

  .hero-top {
    letter-spacing: 1em;
  }

  .hero-middle {
    margin-block: 24px;

    > p {
      opacity: 0.9;
      margin-top: 8px;
      font-size: 1.2rem;
    }

    > img {
      width: 100%;
      margin-top: 16px;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    top: unset;
  }
`;

export { HeroContainer, HeroInnerContainer };
