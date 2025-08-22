import artWeekLogo from "../../../public/img/logos/art-week-logo-sept.png"
import heroPillsCentered from "../../../public/img/hero/pills-centered.png"
import heroPills from "../../../public/img/hero/Pills.png"
import { HeroContainer, HeroInnerContainer } from "./Hero.styled"
// import { DownloadBtn } from '../DownloadBtn/DownloadBtn';
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import DiscoverDclBtn from "../DiscoverDclBtn"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <HeroContainer>
      <HeroInnerContainer>
        <div className="hero-top">
          {/* <TextMaskReveal> */}
          <img src={artWeekLogo} alt="art-week-logo" />
          {/* </TextMaskReveal> */}
          <motion.div style={{ position: "relative" }}>
            {/* <TextMaskReveal delay={0.4}> */}
            {/* <h2>SEPT 24 - 27</h2> */}
            {/* </TextMaskReveal> */}
          </motion.div>
        </div>
        <div className="hero-middle">
          {/* <TextMaskReveal delay={0.6}> */}
          <h3>Can virtual art make us feel more human?</h3>
          <br />
          {/* </TextMaskReveal> */}
          {/* <TextMaskReveal delay={0.8}> */}
          <p>
            A free, four-day festival exploring art in virtual worlds—and your
            place within them.
            <br />
            {/* <span>Hosted by Decentraland, the social virtual world.</span> */}
          </p>
          {/* </TextMaskReveal> */}
          {/* <TextMaskReveal delay={1}> */}
          <img
            src={isMobile ? heroPillsCentered : heroPills}
            alt="hero-pills"
          />
          {/* </TextMaskReveal> */}
        </div>
        {/* <motion.div
          className="hero-bottom"
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.19, 1, 0.22, 1],
            delay: 2.2,
          }}
        > */}
        <div className="hero-bottom-btn">
          <span>Hosted by Decentraland, the social virtual world.</span>
        </div>
        {/* </motion.div> */}
      </HeroInnerContainer>
      <div className="hero-discover-dcl-btn">
        <DiscoverDclBtn />
      </div>
    </HeroContainer>
  )
}

interface TextMaskRevealProps {
  children: React.ReactNode
  delay?: number
}

const TextMaskReveal = ({ children, delay = 0 }: TextMaskRevealProps) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1], delay }}
        style={{
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
            delay: delay + 0.2,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export { Hero, TextMaskReveal }
