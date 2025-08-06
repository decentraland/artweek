import { styled } from 'styled-components';
import faqBackground from '../../../public/img/hero/hero-bg-new.png';
import { breakpoints, theme } from '../../utils/theme';

const SectionFaqContainer = styled.section`
  position: relative;
  background-color: ${theme.black};
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${faqBackground});
  background-size: 220% 220%;
  background-position: 0% 0%;
  background-attachment: fixed;
  min-height: 100vh;

  .faq__inner-container {
    width: 100%;
    max-width: 1240px;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 20px;
  }

  @media (min-width: ${breakpoints.l}) {
    flex-direction: row;
    gap: 0px;
    padding: 100px 60px;
  }
`;

const FaqContainerTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  > h3 {
    font-size: 4rem;
  }
`;

const FaqQuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  /* &:not(:last-child) {
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${theme.white};
    }
  } */

  .faq__question-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 40px;
    cursor: pointer;

    h4 {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  .faq__answer-container {
    width: 100%;
    padding-bottom: 24px;
    opacity: calc(1 - 0.2);
  }

  .faq__line {
    width: 100%;
    height: 1px;
    background-color: ${theme.white};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.7;
  }
`;

export { FaqContainerTop, SectionFaqContainer, FaqQuestionContainer };
