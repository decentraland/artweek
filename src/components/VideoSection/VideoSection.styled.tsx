import { styled } from "styled-components"

const VideoSectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const VideoContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  position: relative;

  .mute-button {
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 24px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 568px) {
      object-fit: contain;
      background-color: #000;
    }
  }
`

export { VideoSectionContainer, VideoContainer }
