import styled from 'styled-components';
import { breakpoints, theme } from '../../utils/theme';

export const InstallationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  padding-block: 100px;

  * {
    color: ${theme.black};
  }

  .installations__inner-container {
    width: 100%;
    max-width: 1240px;
    padding: 20px 24px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 20px;
    }

    .installations__filters {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 20px;

      @media (min-width: ${breakpoints.md}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        align-items: flex-end;
      }

      > div:is(:first-child) {
        width: 100%;
        max-width: 400px;
      }

      div:is(:last-child) {
        width: 100%;
        max-width: 200px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        input {
          width: 100%;
          max-width: 204px;
          background-color: #716b7c;
          color: ${theme.white};
          border: none;
          padding: 8px;
          border-radius: 5px;
          outline: none;
          color: ${theme.white};
          &::placeholder {
            color: ${theme.white};
            opacity: 1;
          }
        }

        @media (min-width: ${breakpoints.md}) {
          justify-content: flex-end;
        }
      }
    }

    /* GRID */
    .installations__grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin-top: 24px;

      @media (min-width: ${breakpoints.s}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: ${breakpoints.md}) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media (min-width: ${breakpoints.l}) {
        grid-template-columns: repeat(6, 1fr);
      }

      .installations__grid-item {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 10px;
        }

        h6 {
          font-size: 16px;
          line-height: 1.2;
          margin-top: 10px;
        }
      }
    }
  }
`;
