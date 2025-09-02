import { FC, Fragment } from "react"
import { artistCards, artistLocations } from "./data"
import {
  ArtistCard,
  ArtistCardsContainer,
  ArtistCardsGrid,
  ArtistDescription,
  ArtistDetails,
  ArtistImage,
  ArtistInfo,
  ArtistLabel,
  ArtistLocation,
  ArtistLocationsContainer,
  ArtistName,
  BiggerPictureSectionContainer,
  MainTitle,
  MapContainer,
  MapOverlay,
  Subtitle,
  TitleSection,
} from "./BiggerPictureSection.styled"

const BiggerPictureSection: FC = () => {
  return (
    <BiggerPictureSectionContainer>
      <TitleSection>
        <MainTitle>The bigger picture</MainTitle>
        <Subtitle>
          Zoom out to see how Art Week unfolds across Decentraland—with
          user-created parties, performances, and activations across Genesis
          City.
        </Subtitle>
      </TitleSection>

      <MapContainer>
        <MapOverlay>
          <ArtistLocationsContainer>
            {artistLocations.map((location) => (
              <Fragment key={location.id}>
                <ArtistLocation
                  width={location.width}
                  height={location.height}
                  left={location.left}
                  top={location.top}
                />
                {location.name && (
                  <ArtistLabel
                    left={location.labelLeft}
                    top={location.labelTop}
                    width={location.labelWidth}
                    centered={location.labelCentered}
                  >
                    {location.name}
                  </ArtistLabel>
                )}
              </Fragment>
            ))}
          </ArtistLocationsContainer>
        </MapOverlay>
      </MapContainer>

      <ArtistCardsContainer>
        <ArtistCardsGrid>
          {artistCards.map((artist) => (
            <ArtistCard key={artist.id}>
              <ArtistImage
                src={artist.image}
                alt={artist.name}
                loading="lazy"
              />
              <ArtistInfo>
                <ArtistDetails>
                  <ArtistName>{artist.name}</ArtistName>
                  <ArtistDescription>{artist.description}</ArtistDescription>
                </ArtistDetails>
              </ArtistInfo>
            </ArtistCard>
          ))}
        </ArtistCardsGrid>
      </ArtistCardsContainer>
    </BiggerPictureSectionContainer>
  )
}

export { BiggerPictureSection }
