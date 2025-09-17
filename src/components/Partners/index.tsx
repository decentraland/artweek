import { styled } from "styled-components"
import logoOne from "../../../public/img/credits/logo-1.png"
import logoTwo from "../../../public/img/credits/logo-2.png"
import logoThree from "../../../public/img/credits/logo-3.png"
import logoFour from "../../../public/img/credits/logo-4.png"
import logoFive from "../../../public/img/credits/logo-5.png"
import { theme } from "../../utils/theme"

const PartnersContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PartnersTitle = styled.h3`
  font-size: 2.2rem;
  margin: 0;
  text-transform: uppercase;
  opacity: 0.8;
  font-weight: 600;
  color: ${theme.black};
  margin-bottom: 48px;
`

const LogosContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  gap: 48px;
  padding-bottom: 120px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 160px;
  }
`

const Partners = () => {
  return (
    <PartnersContainer>
      <PartnersTitle>Partners</PartnersTitle>
      <LogosContainer>
        <img src={logoOne} alt="Partner logo 1" />
        <img src={logoTwo} alt="Partner logo 2" />
        <img src={logoThree} alt="Partner logo 3" />
        <img src={logoFour} alt="Partner logo 4" />
        <img src={logoFive} alt="Partner logo 5" />
      </LogosContainer>
    </PartnersContainer>
  )
}

export { Partners }
