import { useRef, useState } from "react"
import { AnimatedCharacters } from "../animatedCharacters"
import { artists } from "../MapSection/data"
import { InstallationsContainer } from "./Installations.styled"
import { motion, useInView } from "framer-motion"
import { MdOutlineSearch } from "react-icons/md"
import { Modal } from "../Modal"
import { IoMdClose } from "react-icons/io"
// import { GoArrowUpRight } from "react-icons/go"
import { RiLink } from "react-icons/ri"
import { ArtistModalContainer } from "../MapSection/MapSection.styled"

const Installations = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })
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
  console.log(isInView)

  // Filter installationsData based on searchTerm
  const filteredData =
    searchTerm.trim() === ""
      ? artists
      : artists.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

  return (
    <InstallationsContainer id="installations">
      <div className="installations__inner-container" ref={containerRef}>
        <h2>
          <AnimatedCharacters isVisible={true}>
            Explore the Art
          </AnimatedCharacters>
        </h2>
        <div className="installations__filters">
          <div>
            Browse all the installations and discover the artists, then explore
            their creations in-world.
            <br />
            <br />
            <b>SEE INSTALLATION LIST ON MASTER</b>
          </div>

          <div className="installations__filters__search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search installations"
            />
            <MdOutlineSearch className="search-icon" />
          </div>
        </div>

        <div className="installations__grid">
          {filteredData.map((item) => {
            if (!item.image) return null
            return (
              <motion.div
                key={item.id}
                className="installations__grid-item"
                onClick={() => {
                  setActiveArtist(item)
                  setIsModalOpen(true)
                }}
                style={{ cursor: "pointer" }}
                // initial={{ scale: 0.95, opacity: 0 }}
                // animate={
                //   isInView
                //     ? { scale: 1, opacity: 1 }
                //     : { scale: 0.95, opacity: 0 }
                // }
                // transition={{
                //   duration: 0.3,
                //   ease: 'easeInOut',
                //   delay: 0.1 * item.id,
                // }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveArtist(item)
                    setIsModalOpen(true)
                  }}
                />
                <h6>{item.name}</h6>
              </motion.div>
            )
          })}
        </div>
        {filteredData.length === 0 && (
          <div className="installations__no-results">
            <h2>No installations found for "{searchTerm}"</h2>
            <p>
              Try searching for a different keyword or browse all the
              installations.
            </p>
          </div>
        )}
      </div>
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
    </InstallationsContainer>
  )
}
export default Installations
