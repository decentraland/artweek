import { styled } from "styled-components"
import partnersBackground from "../../img/partners/partners-background.png"
import { breakpoints, theme } from "../../utils/theme"

const PartnersContainer = styled.div`
  background-color: ${theme.black};
  background-image: url(${partnersBackground});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 20px;
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 100px 60px;
  }
`

const PartnerContainerLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
    width: 40%;
  }
`

const PartnerContainerRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    width: 60%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }
`

const TitlePartnersSection = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
`

const ImgPartner = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex: 1;

  img {
    width: 200px;
    height: 80px;
    object-fit: contain;
    flex-shrink: 0;
  }

  .img-shefi {
    width: 150px;
  }

  p {
    background: linear-gradient(90deg, ${theme.purple}, ${theme.orange});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    flex-shrink: 0;
  }
`

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const SocialMediaItem = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`

export {
  PartnersContainer,
  PartnerContainerLeft,
  PartnerContainerRight,
  TitlePartnersSection,
  ImgPartner,
  SocialMediaContainer,
  SocialMediaItem,
}
