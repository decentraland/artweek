import { memo, ReactNode, useRef, useState } from 'react';
import {
  FaqContainerTop,
  SectionFaqContainer,
  FaqQuestionContainer,
} from './Faq.styled';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { FaChevronDown } from 'react-icons/fa';
import { questions } from './questions';
import { AnimatedCharacters } from '../animatedCharacters';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionFaqContainer id="faq">
      <div className="faq__inner-container">
        <FaqContainerTop>
          <h3 ref={titleRef}>
            <AnimatedCharacters repeatOnce isVisible={isInView}>
              FAQs
            </AnimatedCharacters>
          </h3>
        </FaqContainerTop>
        <div>
          {questions.map((faq, index) => (
            <FaqQuestion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onToggle={() => toggleAnswer(index)}
            />
          ))}
        </div>
      </div>
    </SectionFaqContainer>
  );
};

const FaqQuestion = ({
  question,
  answer,
  isActive,
  onToggle,
}: {
  question: string;
  answer: () => ReactNode;
  isActive: boolean;
  onToggle: () => void;
}) => {
  const lineRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <FaqQuestionContainer ref={containerRef} onClick={onToggle}>
      <motion.div
        className="faq__question-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4>{question}</h4>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isActive ? 'auto' : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <motion.div
          className="faq__answer-container"
          initial={{ y: -10 }}
          animate={{ y: isActive ? 0 : -10 }}
          transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
        >
          {answer()}
        </motion.div>
      </motion.div>
      {/* white line  */}
      <motion.span
        className="faq__line"
        ref={lineRef}
        // style={{
        //   scaleX,
        //   transformOrigin: 'left',
        // }}
      />
    </FaqQuestionContainer>
  );
};

memo(Faq);
export { Faq };
