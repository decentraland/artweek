import { styled } from "styled-components"
import bgImage from "../../../public/img/hero/hero-bg-new.png"
import { breakpoints } from "../../utils/theme"

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  min-height: 100dvh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${breakpoints.md}) {
    padding: 24px;
    align-items: center;
    justify-content: flex-start;
  }

  .hero-discover-dcl-btn {
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 2;

    @media (max-width: ${breakpoints.md}) {
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      margin-top: 48px;
      position: relative;
    }
  }

  /* @media (max-width: ${breakpoints.md}) {
    .hero-discover-dcl-btn {
      bottom: 0;
    }
  } */

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`

const HeroInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 700px;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  text-align: start;
  justify-content: flex-start;
  position: relative;
  top: 50%;
  z-index: 2;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
    text-align: center;
  }

  .hero-top {
    letter-spacing: 1em;
    margin-top: 48px;

    h2 {
      font-weight: 500;
      letter-spacing: 12px;
    }

    img {
      width: 100%;
      max-width: 350px;
    }

    @media (max-width: ${breakpoints.md}) {
      margin-top: 120px;
    }
  }

  .hero-middle {
    margin-block: 24px 12px;

    h3 {
      font-size: 1.5rem;
    }

    p {
      opacity: 0.9;
      margin-block: 8px 0px;
      font-size: 1rem;

      span {
        display: block;
        margin-top: 16px;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 0.82rem;
      }
    }

    img {
      width: 100%;
      margin-top: 16px;
      max-width: 500px;
    }
  }

  .hero-bottom-btn {
    width: 100%;
    position: relative;
    /* max-width: 320px; */

    *:is(a) {
      width: 100%;
    }

    p {
      font-size: 0.7rem;
      opacity: 0.9;

      @media (min-width: ${breakpoints.md}) {
        text-align: center;
      }
    }
  }

  @media (min-width: ${breakpoints.md}) {
    top: unset;
  }
`

export { HeroContainer, HeroInnerContainer }
