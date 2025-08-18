import { styled } from 'styled-components';
import { breakpoints, theme } from '../../utils/theme';

export const AboutContainer = styled.section`
  /* min-height: 100vh; */
  width: 100%;
  background-color: ${theme.white};
  /* background-image: url('public/img/hero/hero-bg-new.png'); */
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
      flex-direction: column;
    }

    .about__content--image {
      position: relative;
      img {
        max-width: 420px;
        object-fit: contain;
        border-radius: 4px;
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

      @media (max-width: ${breakpoints.l}) {
        width: 100%;

        img {
          max-width: unset;
          max-height: 220px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
      }
    }

    .about__content--list {
      color: ${theme.black};
      max-width: 520px;

      > .header {
        margin-bottom: 46px;

        h3 {
          font-size: 3rem;
          font-weight: bolder;
          letter-spacing: -0.05em;
          color: ${theme.black};
        }
        h4 {
          margin-block: 16px;
          font-weight: 200;
          font-size: 1rem;
          color: ${theme.black};
        }

        @media (max-width: ${breakpoints.l}) {
          margin-bottom: 24px;
          text-align: center;
        }
      }

      > .list {
        display: flex;
        flex-direction: column;
        list-style: none;
        color: ${theme.black};
        gap: 20px;

        li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 0.9rem;
          font-weight: 200;
          gap: 8px;

          img {
            width: 32px;
            height: 32px;
            object-fit: cover;
          }

          * {
            color: ${theme.black};
            font-size: 0.8rem;
          }
        }

        /* @media screen and (min-width: ${breakpoints.md}) { */
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        li {
          align-items: flex-start;
          gap: 16px;
        }
        /* } */
      }
    }
  }
  .about__bottom-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

export const DownloadBtnContainer = styled.div`
  &.mobile-only {
    display: none;

    @media (max-width: ${breakpoints.l}) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 24px;
    }
  }

  &.desktop-only {
    display: none;

    @media (min-width: ${breakpoints.l}) {
      display: block;
      margin-top: 24px;
    }
  }
`;
