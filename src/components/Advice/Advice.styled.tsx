import { styled } from "styled-components"
import talksBackground from "../../img/talks/talks-background.png"
import { breakpoints, theme } from "../../utils/theme"

const AdviceContainer = styled.div`
  background-color: ${theme.black};
  position: relative;
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${talksBackground});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 20px;
  }

  @media (min-width: ${breakpoints.xl}) {
    flex-direction: row;
    gap: 0px;
    padding: 100px 60px;
    align-items: flex-start;
  }
`

const AdviceContainerLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.xl}) {
    justify-content: flex-end;
    align-items: flex-start;
    width: 40%;
    align-self: stretch;
  }
`

const AdviceContainerRight = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 40px;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 60%;
    justify-content: flex-start;
    align-items: stretch;
  }
`

const TalkCardAdvice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-color: ${theme.black};
  height: 100%;
  min-height: 100%;

  .info-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 346px;
    border: 2px solid ${theme.white};
    object-fit: cover;
    border-radius: 25px;
    cursor: pointer;
    flex-shrink: 0;

    aspect-ratio: 16/9;
    transition: transform 0.3s ease;
    will-change: transform;
    &:hover {
      transform: scale(1.03);
      transition: transform 0.3s ease;
    }
  }

  h3 {
    font-size: 20px;
    max-width: 346px;
    font-weight: 700;
    color: ${theme.white};
    text-align: center;
    margin: 0;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.white};
    text-align: center;
    margin: 0;
  }

  .time-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p {
      font-size: 12px;
      font-weight: 500;
      color: ${theme.white};
      text-align: center;
    }
  }
`

export {
  AdviceContainer,
  AdviceContainerLeft,
  AdviceContainerRight,
  TalkCardAdvice,
}
