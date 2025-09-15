import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const BiggerPictureSectionContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 100px 40px;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 120px 60px;
  }
`

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  max-width: 800px;
  margin-bottom: 40px;
`

const MainTitle = styled.h2`
  color: ${theme.black};
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  margin: 0;

  @media (min-width: ${breakpoints.md}) {
    font-size: 56px;
    letter-spacing: -3px;
    line-height: 58px;
  }
`

const Subtitle = styled.p`
  color: ${theme.paleBlack};
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.5px;
  margin: 0;
  max-width: 686px;

  @media (min-width: ${breakpoints.md}) {
    font-size: 18px;
  }
`

const MapContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ArtistCardsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const ArtistCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  align-items: start;
  justify-items: start;
  align-content: start;
  justify-content: start;
  width: 100%;

  /* Small screens: 3 columns */
  @media (min-width: ${breakpoints.s}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  /* Medium screens: 4 columns */
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  /* Large screens: 5 columns */
  @media (min-width: ${breakpoints.l}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }

  /* Extra large screens: 6 columns */
  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }
`

const ArtistCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-self: start;
  gap: 12px;
  border-radius: 8px;
  min-width: 0;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  /* &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  } */
`

const ArtistImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  object-fit: cover;
  flex-shrink: 0;
  max-height: 200px;

  @media (min-width: ${breakpoints.s}) {
    max-height: 180px;
  }

  @media (min-width: ${breakpoints.md}) {
    max-height: 160px;
  }

  @media (min-width: ${breakpoints.l}) {
    max-height: 150px;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-height: 140px;
  }
`

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`

const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`

const ArtistName = styled.h3`
  width: 100%;
  color: ${theme.black};
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
  margin: 0;
`

const ArtistDescription = styled.p`
  width: 100%;
  color: ${theme.paleBlack};
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
  margin: 0;
`

const ArtistModalContainer = styled.div`
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
      color: ${theme.black};
      margin: 0;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      opacity: 0.8;
      text-transform: uppercase;
      margin-bottom: 12px;
      color: ${theme.paleBlack};
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
      line-height: 1.5;
      color: ${theme.black};
      margin: 0;
    }

    a {
      display: inline-flex;
      align-items: center;
      color: ${theme.accent};
      text-decoration: none;
      font-size: 1.2rem;

      &:hover {
        opacity: 0.8;
      }
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
      margin: 0;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.8;
      color: ${theme.black};
      margin: 0;
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
    border: none;
    height: 1px;
    background-color: ${theme.gray};
    margin: 16px 0;
  }
`

export {
  BiggerPictureSectionContainer,
  TitleSection,
  MainTitle,
  Subtitle,
  MapContainer,
  ArtistCardsContainer,
  ArtistCardsGrid,
  ArtistCard,
  ArtistImage,
  ArtistInfo,
  ArtistDetails,
  ArtistName,
  ArtistDescription,
  ArtistModalContainer,
}
