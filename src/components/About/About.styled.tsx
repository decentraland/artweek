import { styled } from 'styled-components';
import { breakpoints } from '../../utils/theme';
import bgImage from '../../../public/img/hero/hero-bg-new.png';

export const AboutContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bgImage});
  background-size: 220% 220%;
  background-position: 0% 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  gap: 40px;
  max-width: 1240px;
  display: grid;
  place-items: center;
  padding-block: 120px;
  padding-inline: 24px;

  .about__content {
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: ${breakpoints.l}) {
      flex-direction: column-reverse;
    }

    .about__content--image {
      position: relative;
      img {
        max-width: 320px;
        @media screen and (min-width: ${breakpoints.md}) {
          max-width: unset;
        }
      }

      .about__content--image--mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 1);
        z-index: 1;
      }
    }

    .about__content--list {
      max-width: 520px;

      > .header {
        margin-bottom: 46px;

        h3 {
          font-size: 4rem;
          font-weight: bolder;
          letter-spacing: -0.05em;
        }
        h4 {
          font-weight: 200;
          font-size: 1.2rem;
        }
      }

      > .list {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 20px;

        li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 0.9rem;
          font-weight: 200;
          gap: 8px;
        }

        @media screen and (min-width: ${breakpoints.md}) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          li {
            align-items: flex-start;
            gap: 16px;
          }
        }
      }
    }
  }
`;
