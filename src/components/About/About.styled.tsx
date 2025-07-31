import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const AboutContainer = styled.div`
  background-color: ${theme.black};
  // arriba, derecha, abajo, izquierda
  padding: 40px 20px 20px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  /* @media (min-width: ${breakpoints.md}) {
    padding: 80px 20px 40px 20px;
  } */

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    gap: 0px;
    align-items: stretch;
    padding: 100px 60px 50px 60px;
  }
`

const AboutContainerLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
    width: 40%;
  }
`

const AboutContainerRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${breakpoints.md}) {
    width: 60%;
    justify-content: flex-start;
  }
`

const TitleAboutSection = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    text-align: end;
  }
`

const LiAbout = styled.li`
  font-size: 22px;
  font-weight: 500;
  color: ${theme.white};
  margin-bottom: 5px;

  a {
    text-decoration: underline !important;
    font-weight: 500;
    color: #3a5aff;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
  }
`

const SpanAbout = styled.span`
  font-size: 22px;
  font-weight: 900;
  background: linear-gradient(90deg, ${theme.purple}, ${theme.orange});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export {
  AboutContainer,
  AboutContainerLeft,
  AboutContainerRight,
  LiAbout,
  SpanAbout,
  TitleAboutSection,
}
