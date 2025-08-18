import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const MapSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 80vh;
  width: 100%;
  padding-block: 100px;

  * {
    color: ${theme.black};
  }

  .map-section__text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 80px;

    h2 {
      font-size: 4rem;
    }

    h6 {
      font-size: 1.2rem;
      font-weight: 400;
      opacity: 0.8;
    }
  }

  .map-section__map-container {
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;
    }

    .map-section__map-container__artists-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 24px;
      width: 100%;
      height: 100%;
      padding: 24px;

      li {
        cursor: pointer;
        list-style: none;
      }

      @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 12px;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        padding: 12px;
      }

      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 12px;
      }
    }
  }
`;

export const ArtistPinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  color: ${theme.black};
  cursor: pointer;

  span.artist-pin__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 100px;
  }

  span.artist-pin__icon {
    width: 100%;
    height: 100%;
    position: relative;
    width: auto;

    svg {
      /* width: 100%; */
      /* height: 100%; */
      width: 32px;
      height: 32px;
    }

    span.artist-pin__icon__number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -80%);
      color: ${theme.white};
      z-index: 10;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
`;

export const ArtistModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  .top {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 24px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      opacity: 0.8;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: 200px;
      border-radius: 4px;
    }
  }

  .middle {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;

    p {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  .bottom {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30%;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 4px;
    }

    h6 {
      font-size: 0.7rem;
      font-weight: 600;
      opacity: 0.8;
      text-transform: uppercase;
      color: ${theme.paleBlack};
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.8;
    }
  }

  .actions {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 16px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      outline: none;
      border: none;
      padding: 12px 24px;
      border-radius: 40px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 400;
      transition: all 0.3s ease;
      text-transform: uppercase;
      gap: 6px;

      svg {
        font-size: 1.2rem;
      }
    }

    button:first-child {
      background-color: ${theme.white};
      color: ${theme.black};
    }

    button:last-child {
      background-color: ${theme.paleBlack};
      color: ${theme.white};
      svg {
        fill: ${theme.white};
      }
    }
  }

  hr {
    width: 100%;
    height: 0.5px;
    opacity: 0.5;
    background-color: ${theme.black};
    margin: 12px 0;
  }
`;
