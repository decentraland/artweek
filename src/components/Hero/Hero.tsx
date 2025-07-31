import { useResizePage } from '../../hooks/useResizePage';
import artWeekLogo from '../../../public/img/logos/art-week-logo-white.png';
import { JumpInBtn } from '../JumpInBtn/JumpInBtn';
import { HeroContainer, HeroInnerContainer } from './Hero.styled';

const Hero = () => {
  const { isMobile } = useResizePage({ size: 568 });

  return (
    <HeroContainer>
      <HeroInnerContainer>
        <div className="hero-top">
          <img src={artWeekLogo} alt="art-week-logo" />
          <h2>SEPT 24 - 27</h2>
        </div>
        <div className="hero-bottom">
          <JumpInBtn />
        </div>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export { Hero };
