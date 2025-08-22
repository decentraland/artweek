import { useInView } from "motion/react"
import { AnimatedCharacters } from "../animatedCharacters"
import {
  ArtistModalContainer,
  ArtistPinContainer,
  MapSectionContainer,
} from "./MapSection.styled"
import { useRef, useState } from "react"
import MapVector from "./MapVector"
import { FaLocationPin } from "react-icons/fa6"
import { Modal } from "../Modal"
import { IoMdClose } from "react-icons/io"
// import { GoArrowUpRight } from "react-icons/go"
import { RiLink } from "react-icons/ri"
import { artists, invitedArtists } from "./data"
// import MapRefsVector from './MapRefsVector';

interface ArtistPinProps {
  id: number
  artistName: string
  setIsModalOpen: (isOpen: boolean) => void
}

const MapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeArtist, setActiveArtist] = useState<{
    id: number
    name: string
    description: string
    image: string
    link: string
    studio: string
    coordinates: {
      lat: number
      lng: number
    }
  } | null>(null)

  return (
    <>
      <MapSectionContainer id="map">
        <div className="map-section__inner-container" ref={containerRef}>
          <div className="map-section__text-container">
            <h2>
              <AnimatedCharacters isVisible={isInView}>
                Art Week map
              </AnimatedCharacters>
            </h2>
            <h6>
              <AnimatedCharacters isVisible={isInView}>
                Press the installation of an artist to see it&apos;s details.
              </AnimatedCharacters>
            </h6>
          </div>

          <div className="map-section__map-container">
            <div className="map">
              <div className="map-vector">
                <MapVector />
              </div>
              {/* <div className="map-refs-vector">
                <MapRefsVector />
              </div> */}
            </div>
            <ul className="map-section__map-container__artists-grid">
              {[...artists, ...invitedArtists].map((artist: any) => (
                <li key={artist.id} onClick={() => setActiveArtist(artist)}>
                  <ArtistPin
                    id={artist.id}
                    artistName={artist.name}
                    setIsModalOpen={setIsModalOpen}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MapSectionContainer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ArtistModalContainer>
          <div className="top">
            <h2>{activeArtist?.name}</h2>
            <p>{activeArtist?.studio}</p>
            <img src={activeArtist?.image} alt={activeArtist?.name} />
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
            <div>
              <h6>Decentraland coordinates</h6>
              <p>
                ({activeArtist?.coordinates.lat.toFixed(2)},{" "}
                {activeArtist?.coordinates.lng.toFixed(2)})
              </p>
            </div>
          </div>
          <hr />
          <div className="actions">
            <button onClick={() => setIsModalOpen(false)}>
              Close <IoMdClose />
            </button>
            {/* <button
            onClick={() => {
              window.open(
                `https://play.decentraland.org/?position=${activeArtist?.coordinates.lat},${activeArtist?.coordinates.lng}`,
                '_blank',
              );
            }}
            >
              Jump in <GoArrowUpRight />
            </button> */}
          </div>
        </ArtistModalContainer>
      </Modal>
    </>
  )
}

export default MapSection

const ArtistPin = ({ id, artistName, setIsModalOpen }: ArtistPinProps) => {
  return (
    <ArtistPinContainer>
      <span
        className="artist-pin__container"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="artist-pin__icon">
          <FaLocationPin width={20} height={20} />
          <span className="artist-pin__icon__number">{id}</span>
        </span>
        <span className="artist-pin__name">{artistName}</span>
      </span>
    </ArtistPinContainer>
  )
}
