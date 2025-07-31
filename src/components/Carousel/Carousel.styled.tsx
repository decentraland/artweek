import { keyframes, styled } from "styled-components"

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-top: 2px solid #ebecfa;
  border-bottom: 2px solid #ebecfa;
`

const CarouselTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 100s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`

const CarouselItem = styled.div`
  flex: 0 0 auto;
  height: 300px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
`

export { CarouselContainer, CarouselTrack, CarouselItem }
