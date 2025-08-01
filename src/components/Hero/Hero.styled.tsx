import { styled } from 'styled-components';
import bgImage from '../../../public/img/hero/hero-bg.jpg';
import { breakpoints } from '../../utils/theme';

const HeroContainer = styled.div`
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
`;

const HeroInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 400px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  top: -88px;

  .hero-top {
    margin: 0 0 24px 0;
    letter-spacing: 1em;
  }

  @media (min-width: ${breakpoints.md}) {
    top: unset;
  }
`;

export { HeroContainer, HeroInnerContainer };
