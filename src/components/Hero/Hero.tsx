import { useResizePage } from '../../hooks/useResizePage';
import careerQuestLogo from '../../img/faq/career-quest-logo.png';
import { JumpInBtn } from '../JumpInBtn/JumpInBtn';
import {
  HeroContainer,
  HeroInnerContainer,
  HeroTextContainer,
  HeroTextContainerCenter,
  HeroTextContainerLeft,
  HeroTextContainerRight,
} from './Hero.styled';

const Hero = () => {
  const { isMobile } = useResizePage({ size: 568 });

  return (
    <HeroContainer>
      <HeroInnerContainer>
        <div className="hero-top">
          <p className="hero-date">JULY 16 - 17</p>
          {/* <img src={careerQuestLogo} alt="decentraland-logo" /> */}
          <p className="hero-info">
            EXPLORE WEB3 CAREERS, SHARPEN YOUR SKILLS, AND CONNECT WITH TOP
            HIRING TEAMS
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%',
            marginBottom: '24px',
          }}
        >
          {isMobile ? (
            <>
              <HeroTextContainer>
                <HeroTextContainerLeft className="background-fill-white">
                  <p>FREE & OPEN TO ALL</p>
                </HeroTextContainerLeft>
                <HeroTextContainerRight className="background-transparent">
                  <p>HIRING INSIGHTS</p>
                </HeroTextContainerRight>
              </HeroTextContainer>

              <HeroTextContainer>
                <HeroTextContainerLeft className="background-transparent">
                  <p>EXPERT WORKSHOPS</p>
                </HeroTextContainerLeft>
                <HeroTextContainerRight className="background-fill-white">
                  <p>TRAINING GIVEAWAYS</p>
                </HeroTextContainerRight>
              </HeroTextContainer>

              <HeroTextContainer>
                <HeroTextContainerLeft className="background-fill-white">
                  <p>WIN A WEB3 BOOTCAMP</p>
                </HeroTextContainerLeft>
                <HeroTextContainerRight className="background-transparent">
                  <p>GAME ARENA</p>
                </HeroTextContainerRight>
              </HeroTextContainer>
            </>
          ) : (
            <>
              <HeroTextContainer>
                <HeroTextContainerLeft className="background-fill-white">
                  <p>FREE & OPEN TO ALL</p>
                </HeroTextContainerLeft>

                <HeroTextContainerCenter className="background-transparent">
                  <p>HIRING INSIGHTS</p>
                </HeroTextContainerCenter>

                <HeroTextContainerRight className="background-fill-white">
                  <p>EXPERT WORKSHOPS</p>
                </HeroTextContainerRight>
              </HeroTextContainer>

              <HeroTextContainer>
                <HeroTextContainerLeft className="background-transparent">
                  <p>TRAINING GIVEAWAYS</p>
                </HeroTextContainerLeft>

                <HeroTextContainerCenter className="background-fill-white">
                  <p>WIN A WEB3 BOOTCAMP</p>
                </HeroTextContainerCenter>

                <HeroTextContainerRight className="background-transparent">
                  <p>GAME ARENA</p>
                </HeroTextContainerRight>
              </HeroTextContainer>
            </>
          )}
        </div>
        <div className="hero-bottom">
          <JumpInBtn />
        </div>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export { Hero };
