import { useRef, useState } from 'react';
import { AnimatedCharacters } from '../animatedCharacters';
import { installationsData } from './data';
import { InstallationsContainer } from './Installations.styled';
import { motion, useInView } from 'framer-motion';

const Installations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  console.log(isInView);

  // Filter installationsData based on searchTerm
  const filteredData =
    searchTerm.trim() === ''
      ? installationsData
      : installationsData.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

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
            Browse all the installations and discover the artists, then explore
            their creations in-world.
            <br />
            <br />
            <b>SEE INSTALLATION LIST ON MASTER</b>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search installations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search installations"
            />
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
              <img src={item.img} alt={item.name} />
              <h6>{item.name}</h6>
            </motion.div>
          ))}
        </div>
      </div>
    </InstallationsContainer>
  );
};

export default Installations;
