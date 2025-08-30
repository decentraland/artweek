import { useEffect, useState } from "react"
import styled from "styled-components"
// assets
// import bgLineUp from "../../../img/lineup/bg.png"
// import imgDesktop from "../../../img/lineup/lineup-desktop.png"
// import imgMobile from "../../../img/lineup/lineup-mobile.png"
// import { DownloadLink } from "../../DownloadButton"

const LineUpList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  console.log(isMobile)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768)
    })
  }, [])

  return (
    <ListContainer>
      {/* <Background src={bgLineUp} /> */}
      <img
        className="lineup-img"
        // src={isMobile ? imgMobile : imgDesktop}
        alt="lineup"
      />
      {/* <DownloadLink useJump /> */}
    </ListContainer>
  )
}

const ListContainer = styled.div`
  overflow: hidden;
  margin-top: 70px;
  padding-bottom: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  position: relative;

  .lineup-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 832px;
    mix-blend-mode: background;
    z-index: 1;
  }
`

// const Background = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 0;
// `

export { LineUpList }
