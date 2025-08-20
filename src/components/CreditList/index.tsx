import styled from 'styled-components';
import { breakpoints, theme } from '../../utils/theme';
import { AnimatedCharacters } from '../animatedCharacters';
import { artistsAndCurators, studios } from './data';

const CreditListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 48px;

  * {
    color: ${theme.black};
  }

  h2 {
    font-size: 3rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 48px;
  }
`;

const CreditListContent = styled.div`
  display: flex;
  gap: 80px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  opacity: 0.8;
  font-weight: 600;
`;

const ColumnsContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${theme.paleBlack};
`;

const CreditList = () => {
  // Split artists and curators into two columns
  const artistsColumn1 = artistsAndCurators.slice(
    0,
    Math.ceil(artistsAndCurators.length / 2),
  );
  const artistsColumn2 = artistsAndCurators.slice(
    Math.ceil(artistsAndCurators.length / 2),
  );

  // Split studios into two columns
  const studiosColumn1 = studios.slice(0, Math.ceil(studios.length / 2));
  const studiosColumn2 = studios.slice(Math.ceil(studios.length / 2));

  return (
    <CreditListContainer>
      <h2>
        <AnimatedCharacters isVisible={true}>Credit List</AnimatedCharacters>
      </h2>
      <CreditListContent>
        <Section>
          <SectionTitle>Artists & Curators</SectionTitle>
          <ColumnsContainer>
            <Column>
              {artistsColumn1.map((name, index) => (
                <Name key={index}>{name}</Name>
              ))}
            </Column>
            <Column>
              {artistsColumn2.map((name, index) => (
                <Name key={index}>{name}</Name>
              ))}
            </Column>
          </ColumnsContainer>
        </Section>

        <Section>
          <SectionTitle>Studios</SectionTitle>
          <ColumnsContainer>
            <Column>
              {studiosColumn1.map((name, index) => (
                <Name key={index}>{name}</Name>
              ))}
            </Column>
            <Column>
              {studiosColumn2.map((name, index) => (
                <Name key={index}>{name}</Name>
              ))}
            </Column>
          </ColumnsContainer>
        </Section>
      </CreditListContent>
    </CreditListContainer>
  );
};

export default CreditList;
