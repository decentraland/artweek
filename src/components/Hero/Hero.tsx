import { useResizePage } from '../../hooks/useResizePage';
import artWeekLogo from '../../../public/img/logos/art-week-logo-white.png';
import heroPills from '../../../public/img/hero/pills-centered.png';
import { HeroContainer, HeroInnerContainer } from './Hero.styled';
import { DownloadBtn } from '../DownloadBtn/DownloadBtn';

const Hero = () => {
  const { isMobile } = useResizePage({ size: 568 });
  console.log(isMobile);

  return (
    <HeroContainer>
      <HeroInnerContainer>
        <div className="hero-top">
          <img src={artWeekLogo} alt="art-week-logo" />
          <h2>SEPT 24 - 27</h2>
        </div>
        <div className="hero-middle">
          <h3>Can virtual art make us feel more human?</h3>
          <p>
            A free, four-day festival exploring art in virtual worlds — and your
            place within them.
          </p>
          <img src={heroPills} alt="hero-pills" />
        </div>
        <div className="hero-bottom">
          <DownloadBtn showAvailableOnText={false} />
        </div>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export { Hero };
