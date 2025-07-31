import { styled } from "styled-components"
import { breakpoints, theme } from "../utils/theme"

const DivVerticalLine = styled.div`
  width: 2px;
  background-color: ${theme.white};
  display: none;
  margin: 0 40px;
  height: auto;
  align-self: stretch;

  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
`

// Live Talks
const DescriptionLiveTalksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${breakpoints.xl}) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const IconsLiveTalksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const IconItemLiveTalks = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`

const DescriptionTextLiveTalks = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.white};
  text-align: center;
  max-width: 560px;

  @media (min-width: ${breakpoints.xl}) {
    text-align: end;
    max-width: 345px;
  }
`

const LiveTalksInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: ${breakpoints.xl}) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`

const TitleLiveTalksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    gap: 10px;
  }

  @media (min-width: ${breakpoints.xl}) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-end;
    justify-content: flex-end;
  }
`

const TitleLiveTalks = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
`

const SubtitleLiveTalks = styled.h3`
  font-size: 24px;
  font-weight: 700;
  max-width: 560px;
  color: ${theme.white};
  text-align: center;

  @media (min-width: ${breakpoints.xl}) {
    max-width: 345px;
    text-align: end;
  }
`

const ModalLiveTalksImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`

export {
  DivVerticalLine,
  DescriptionLiveTalksContainer,
  DescriptionTextLiveTalks,
  IconsLiveTalksContainer,
  IconItemLiveTalks,
  LiveTalksInfoContainer,
  TitleLiveTalksContainer,
  TitleLiveTalks,
  SubtitleLiveTalks,
  ModalLiveTalksImage,
}
