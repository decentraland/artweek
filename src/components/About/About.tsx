import { AboutContainer, AboutInnerContainer } from './About.styled';
import provisoryMap from '../../../public/img/about/map.png';
import { useRef } from 'react';
import { aboutList } from './list';
import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { MarqueeContainerWrapper } from '../Marquee/Marquee.styled';
import { Marquee } from '../Marquee/Marquee';
import { AnimatedCharacters } from '../animatedCharacters';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: '-200px 0px',
    once: true,
  });

  return (
    <AboutContainer ref={containerRef} id="about">
      <AboutInnerContainer>
        <div className="about__content">
          <div className="about__content--image">
            <motion.div
              initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
              animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
              transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
              style={{
                overflow: 'hidden',
              }}
            >
              <img
                src={provisoryMap}
                alt="map"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </motion.div>
          </div>
          <div className="about__content--list">
            <div className="header">
              <h3>
                <AnimatedCharacters repeatOnce={true} isVisible={isInView}>
                  Touch Grass
                </AnimatedCharacters>
              </h3>
              <h4>
                <AnimatedCharacters
                  repeatOnce={true}
                  isVisible={isInView}
                  delay={0.5}
                >
                  A digital exploration of presence, connection, and feeling.
                </AnimatedCharacters>
              </h4>
            </div>
            <ul className="list">
              {Object.values(aboutList)
                .sort(() => Math.random() - 0.5)
                .map((item, index) => (
                  <motion.li
                    key={`--aboutList-${index}`}
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
                    transition={{ duration: 1.5, delay: index * 0.15, ease: [0.19, 1, 0.22, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <AboutListItem {...item} />
                  </motion.li>
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
    <motion.li>
      <img src={icon} alt="List item icon" />
      <span>{html}</span>
    </motion.li>
  );
};

export { AboutListItem };
