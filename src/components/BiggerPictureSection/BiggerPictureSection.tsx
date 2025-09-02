import React from "react"
import {
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
} from "./BiggerPictureSection.styled"
import { artistLocations, artistCards } from "./data"

const BiggerPictureSection: React.FC = () => {
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
              <React.Fragment key={location.id}>
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
              </React.Fragment>
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
