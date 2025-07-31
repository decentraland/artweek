import bondex from "../../img/partners/bondex.png"
import metana from "../../img/partners/metana.png"
import shefi from "../../img/partners/shefi.png"
import { DivVerticalLine } from "../../shared/common.styled"
import {
  ImgPartner,
  PartnerContainerLeft,
  PartnerContainerRight,
  PartnersContainer,
  TitlePartnersSection,
} from "./Partners.styled"

const Partners = () => {
  return (
    <PartnersContainer>
      <PartnerContainerLeft>
        <TitlePartnersSection>Partners</TitlePartnersSection>
        <DivVerticalLine />
      </PartnerContainerLeft>

      <PartnerContainerRight>
        <ImgPartner>
          <img src={bondex} alt="bondex" />
          <p>Official Hiring Partner</p>
        </ImgPartner>
        <ImgPartner>
          <img src={metana} alt="metana" />
          <p>Official Training Partner</p>
        </ImgPartner>
        <ImgPartner>
          <img className="img-shefi" src={shefi} alt="shefi" />
          <p>Official Access Partner</p>
        </ImgPartner>
      </PartnerContainerRight>
    </PartnersContainer>
  )
}

export { Partners }
