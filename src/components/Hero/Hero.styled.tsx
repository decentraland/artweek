import { styled } from 'styled-components';
import bgImage from '../../../public/img/hero/hero-bg.jpg';
// import { breakpoints, theme } from '../../utils/theme';

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${bgImage});
  background-size: cover;
  min-height: 100dvh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 80px;
`;

const HeroInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 400px;
  /* border: 2px solid lime; */
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .hero-top {
    margin: 0 0 24px 0;
    letter-spacing: 1em;
  }
`;

export { HeroContainer, HeroInnerContainer };
