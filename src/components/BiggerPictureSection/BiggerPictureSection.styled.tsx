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
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
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
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
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
  position: relative;
  background: lightgray;
  background-image: url('https://api.builder.io/api/v1/image/assets/TEMP/cde5fc716f12202372b19e97a33413478e1e86b7?width=2320');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  overflow: hidden;
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.md}) {
    height: 600px;
  }

  @media (min-width: ${breakpoints.l}) {
    height: 755px;
  }
`

const MapOverlay = styled.div`
  position: absolute;
  inset: 0;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    padding: 40px;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 81.5px 109.369px 82.131px 164px;
  }
`

const ArtistLocationsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media (min-width: ${breakpoints.l}) {
    width: 887px;
    height: 591px;
    left: 164px;
    top: 82px;
  }
`

const ArtistLocation = styled.div<{
  width: number;
  height: number;
  left: number;
  top: number;
  $isHighlighted?: boolean;
}>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  background: ${props => props.$isHighlighted ? '#c5b8b7' : '#EEDDDC'};
  border-radius: 3.384px;
  pointer-events: auto;
  cursor: pointer;
  transition: all 0.2s ease;
  border: ${props => props.$isHighlighted ? '2px solid #8b7877' : 'none'};
  box-shadow: ${props => props.$isHighlighted ? '0 0 15px rgba(139, 120, 119, 0.5)' : 'none'};

  &:hover {
    background: ${props => props.$isHighlighted ? '#b5a8a7' : '#dcc8c7'};
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.l}) {
    transform: scale(0.7);
    transform-origin: top left;
  }

  @media (max-width: ${breakpoints.md}) {
    transform: scale(0.5);
    transform-origin: top left;
  }
`

const ArtistLabel = styled.div<{
  left: number;
  top: number;
  width?: number;
  centered?: boolean;
  $isHighlighted?: boolean;
}>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  width: ${props => props.width || 'auto'}px;
  color: ${props => props.$isHighlighted ? '#8b7877' : theme.black};
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 15.228px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.423px;
  pointer-events: auto;
  cursor: pointer;
  ${props => props.centered && `text-align: center;`}
  transition: color 0.2s ease;

  @media (max-width: ${breakpoints.l}) {
    transform: scale(0.7);
    transform-origin: top left;
  }

  @media (max-width: ${breakpoints.md}) {
    transform: scale(0.5);
    transform-origin: top left;
  }
`

const ArtistCardsContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`

const ArtistCardsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  overflow-x: auto;
  padding-bottom: 20px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: ${theme.paleBlack} transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.paleBlack};
    border-radius: 3px;
  }

  @media (max-width: ${breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  @media (min-width: ${breakpoints.md}) {
    overflow-x: visible;
    padding-bottom: 0;
  }
`

const ArtistCard = styled.div`
  display: flex;
  min-width: 140px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;

  @media (max-width: ${breakpoints.md}) {
    flex: 0 0 280px;
    min-width: 280px;
  }

  @media (min-width: ${breakpoints.md}) {
    max-width: calc((100% - 100px) / 6);
  }
`

const ArtistImage = styled.img`
  width: 100%;
  height: 176.667px;
  aspect-ratio: 1/1;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  object-fit: cover;
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
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
  margin: 0;
`

const ArtistDescription = styled.p`
  width: 100%;
  color: ${theme.paleBlack};
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
  margin: 0;
`

export {
  BiggerPictureSectionContainer,
  TitleSection,
  MainTitle,
  Subtitle,
  MapContainer,
  MapOverlay,
  ArtistLocationsContainer,
  ArtistLocation,
  ArtistLabel,
  ArtistCardsContainer,
  ArtistCardsGrid,
  ArtistCard,
  ArtistImage,
  ArtistInfo,
  ArtistDetails,
  ArtistName,
  ArtistDescription,
}
