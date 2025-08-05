import { AboutContainer, AboutInnerContainer } from './About.styled';
import provisoryMap from '../../../public/img/about/map.png';
import { aboutList } from './list';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MarqueeContainerWrapper } from '../Marquee/Marquee.styled';
import { Marquee } from '../Marquee/Marquee';

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutInnerContainer>
        <div className="about__content">
          <div className="about__content--image">
            <img src={provisoryMap} alt="map" />
          </div>
          <div className="about__content--list">
            <div className="header">
              <h3>Touch Grass</h3>
              <h4>
                A digital exploration of presence, connection, and feeling.
              </h4>
            </div>
            <ul className="list">
              {Object.values(aboutList).map((item, index) => (
                <motion.span key={`--aboutList-${index}`}>
                  <AboutListItem key={index} {...item} />
                </motion.span>
              ))}
            </ul>
          </div>
        </div>
      </AboutInnerContainer>
      <MarqueeContainerWrapper
        style={{
          marginTop: 'auto',
        }}
      >
        <Marquee variant="glass" />
      </MarqueeContainerWrapper>
    </AboutContainer>
  );
};

export default About;

const AboutListItem = ({ icon, html }: { icon: string; html: ReactNode }) => {
  return (
    <li>
      <img src={icon} alt="map" />
      <span>{html}</span>
    </li>
  );
};

export { AboutListItem };
