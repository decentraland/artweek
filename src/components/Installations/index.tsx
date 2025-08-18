import { useRef, useState } from 'react';
import { AnimatedCharacters } from '../animatedCharacters';
import { installationsData } from './data';
import { InstallationsContainer } from './Installations.styled';
import { motion, useInView } from 'framer-motion';

const Installations = () => {
  const [selectedTitle, setSelectedTitle] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  console.log(isInView);

  // Get unique titles from installationsData
  const uniqueTitles = Array.from(
    new Set(installationsData.map((item) => item.title)),
  );

  // Filter installationsData based on selectedTitle
  const filteredData =
    selectedTitle === 'all'
      ? installationsData
      : installationsData.filter((item) => item.title === selectedTitle);

  return (
    <InstallationsContainer id="installations">
      <div className="installations__inner-container" ref={containerRef}>
        <h2>
          <AnimatedCharacters isVisible={true}>
            Installations
          </AnimatedCharacters>
        </h2>
        <div className="installations__filters">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div>
            <select
              value={selectedTitle}
              onChange={(e) => setSelectedTitle(e.target.value)}
            >
              <option value="all">All</option>
              {uniqueTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
            <select
              value={selectedTitle}
              onChange={(e) => setSelectedTitle(e.target.value)}
            >
              <option value="all">All</option>
              {uniqueTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="installations__grid">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="installations__grid-item"
              // initial={{ scale: 0.95, opacity: 0 }}
              // animate={
              //   isInView
              //     ? { scale: 1, opacity: 1 }
              //     : { scale: 0.95, opacity: 0 }
              // }
              // transition={{
              //   duration: 0.3,
              //   ease: 'easeInOut',
              //   delay: 0.1 * item.id,
              // }}
            >
              <img src={item.image} alt={item.title} />
              <h6>{item.title}</h6>
            </motion.div>
          ))}
        </div>
      </div>
    </InstallationsContainer>
  );
};

export default Installations;
