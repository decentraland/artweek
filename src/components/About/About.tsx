import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { aboutList } from "./list"
import provisoryMap from "../../../public/img/about/tree.png"
import { DownloadBtn } from "../DownloadBtn/DownloadBtn"
import { Marquee } from "../Marquee/Marquee"
import { MarqueeContainerWrapper } from "../Marquee/Marquee.styled"
import { AboutContainer, AboutInnerContainer } from "./About.styled"
// import { DownloadBtn } from '../DownloadBtn/DownloadBtn';
// import { AnimatedCharacters } from '../animatedCharacters';

// const BASE_DELAY_ANI_1 = 0.5;
// const BASE_DELAY_ANI_2 = 1;
// const BASE_DELAY_ANI_3 = 1.5;

const About = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {
    margin: "-200px 0px",
    once: true,
  })

  return (
    <AboutContainer ref={containerRef} id="about">
      <AboutInnerContainer>
        <div className="about__content">
          <div className="about__content--image">
            <motion.div
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
              transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src={provisoryMap}
                alt="map"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </motion.div>
          </div>
          <div className="about__content--list">
            <div className="header">
              <h3>Experience Art Week</h3>
              <h4>
                This year&apos;s theme, TOUCH GRASS, invites you on a digital
                journey into presence, connection, and feeling through art in
                virtual worlds.
              </h4>
            </div>
            <ul className="list">
              {Object.values(aboutList).map((item, index) => (
                <li
                  key={`--aboutList-${index}`}
                  // initial={{ clipPath: 'inset(100% 20% 10% 0%)' }}
                  // animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                  // transition={{
                  //   duration: 1.5,
                  //   delay: index * 0.15,
                  //   ease: [0.19, 1, 0.22, 1],
                  // }}
                  style={{ overflow: "hidden" }}
                >
                  <AboutListItem {...item} />
                </li>
              ))}
            </ul>
            <div className="download-btn-container">
              <DownloadBtn
                variant="cosmicGlass"
                showAvailableOnText={false}
                className="download-btn"
              />
            </div>
          </div>
        </div>
      </AboutInnerContainer>

      <MarqueeContainerWrapper
        style={{
          marginTop: "auto",
        }}
      >
        <Marquee variant="light" />
      </MarqueeContainerWrapper>
    </AboutContainer>
  )
}

const AboutListItem = ({ icon, html }: { icon: string; html: ReactNode }) => {
  return (
    <motion.li>
      <img src={icon} alt="List item icon" />
      <span>{html}</span>
    </motion.li>
  )
}

export { About, AboutListItem }
