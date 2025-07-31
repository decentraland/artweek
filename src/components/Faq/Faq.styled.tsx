import { styled } from "styled-components"
import faqBackground from "../../img/faq/faq-background.png"
import { breakpoints, theme } from "../../utils/theme"

const SectionFaqContainer = styled.section`
  position: relative;
  background-color: ${theme.black};
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${faqBackground});
    background-size: cover;
    opacity: 0.5;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 20px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    gap: 0px;
    padding: 100px 60px;
  }
`

const FaqContainerLeft = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: ${breakpoints.l}) {
    justify-content: flex-end;
    width: 40%;
  }
`

const DivVerticalLineFaq = styled.div`
  width: 2px;
  background-color: ${theme.white};
  display: none;
  margin: 0 40px;
  height: auto;
  align-self: stretch;

  @media (min-width: ${breakpoints.l}) {
    display: block;
  }
`

const FaqContainerRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 20px; */

  @media (min-width: ${breakpoints.l}) {
    width: 60%;
  }
`

const TitleFaq = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
  max-width: 425px;
  text-align: start;

  @media (min-width: ${breakpoints.l}) {
    text-align: end;
    max-width: 400px;
  }
`

const QuestionFaqContainer = styled.div`
  width: 100%;
  border-top: 2px solid ${theme.white};
  padding: 20px 0;

  &:last-child {
    border-bottom: 2px solid ${theme.white};
  }
`

const QuestionFaq = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  p {
    font-size: 24px;
    font-weight: 700;
    color: ${theme.white};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    max-width: 560px;
  }
`

const AnswerFaq = styled.div<{ $isActive: boolean }>`
  max-height: ${(props) => (props.$isActive ? "1000px" : "0")};
  opacity: ${(props) => (props.$isActive ? "1" : "0")};
  margin-top: ${(props) => (props.$isActive ? "20px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  p {
    font-size: 18px;
    color: ${theme.white};
    font-weight: 500;
    max-width: 560px;
  }

  a {
    text-decoration: underline !important;
    color: rgb(0, 0, 238);
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
  }
`

const ArrowFaq = styled.img<{ $isActive: boolean }>`
  transition: all 0.3s ease-in-out;
  height: 24px;
  transform: ${(props) =>
    props.$isActive ? "rotate(180deg)" : "rotate(0deg)"};
`

export {
  SectionFaqContainer,
  FaqContainerLeft,
  FaqContainerRight,
  TitleFaq,
  QuestionFaqContainer,
  QuestionFaq,
  AnswerFaq,
  ArrowFaq,
  DivVerticalLineFaq,
}
