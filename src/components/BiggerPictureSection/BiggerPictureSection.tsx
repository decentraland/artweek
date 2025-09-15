import { FC, useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
import { IoMdClose } from "react-icons/io"
import { RiLink } from "react-icons/ri"
import { ArtistCard as ArtistCardType, artistCards } from "./data"
import map from "../../../public/img/bigger-picture/map-final.png"
import { Modal } from "../Modal"
import {
  ArtistCard,
  ArtistCardsContainer,
  ArtistCardsGrid,
  ArtistDescription,
  ArtistDetails,
  ArtistImage,
  ArtistInfo,
  ArtistModalContainer,
  ArtistName,
  BiggerPictureSectionContainer,
  MainTitle,
  MapContainer,
  Subtitle,
  TitleSection,
} from "./BiggerPictureSection.styled"

const BiggerPictureSection: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeArtist, setActiveArtist] = useState<ArtistCardType | null>(null)

  const handleArtistClick = (artist: ArtistCardType) => {
    setActiveArtist(artist)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setActiveArtist(null)
  }

  return (
    <>
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
          <img src={map} alt="map" />
        </MapContainer>

        <ArtistCardsContainer>
          <ArtistCardsGrid>
            {artistCards.map((artist, index) => (
              <ArtistCard
                key={artist.id}
                onClick={() => handleArtistClick(artist)}
              >
                <ArtistImage
                  src={artist.image}
                  alt={artist.artistName}
                  loading="lazy"
                />
                <ArtistInfo>
                  <ArtistDetails>
                    <ArtistName>
                      C{index + 1}. {artist.artistName}
                    </ArtistName>
                    <ArtistDescription>{artist.title}</ArtistDescription>
                  </ArtistDetails>
                </ArtistInfo>
              </ArtistCard>
            ))}
          </ArtistCardsGrid>
        </ArtistCardsContainer>
      </BiggerPictureSectionContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ArtistModalContainer>
          <div className="top">
            <h2>{activeArtist?.artistName}</h2>
            <p>{activeArtist?.title}</p>
            <img src={activeArtist?.image} alt={activeArtist?.artistName} />
          </div>
          <div className="middle">
            <p>{activeArtist?.description || "No description available"}</p>
            {activeArtist?.link && (
              <a
                href={activeArtist?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLink />
              </a>
            )}
          </div>
          <hr />
          <div className="bottom">
            <div>
              <h6>Studio</h6>
              <p>{activeArtist?.studio}</p>
            </div>
          </div>
          <hr />
          <div className="actions">
            <button onClick={handleCloseModal}>
              Close <IoMdClose />
            </button>
            <button
              onClick={() => {
                if (activeArtist?.jumpInLink) {
                  window.open(activeArtist.jumpInLink, "_blank")
                }
              }}
            >
              Jump in <GoArrowUpRight />
            </button>
          </div>
        </ArtistModalContainer>
      </Modal>
    </>
  )
}

export { BiggerPictureSection }
