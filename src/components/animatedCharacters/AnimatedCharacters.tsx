import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCharactersProps {
  children: ReactNode;
  isVisible: boolean;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  ease?:
    | 'linear'
    | 'easeIn'
    | 'easeOut'
    | 'easeInOut'
    | 'circIn'
    | 'circOut'
    | 'circInOut'
    | 'backIn'
    | 'backOut'
    | 'backInOut'
    | 'anticipate';
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedCharacters = ({
  children,
  isVisible,
  delay = 0,
  staggerDelay = 0.014,
  duration = 0.5,
  ease = 'easeOut',
  className,
  style,
}: AnimatedCharactersProps) => {
  const text =
    typeof children === 'string' ? children : children?.toString() || '';
  const chars = text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: isVisible ? delay : 0,
      },
    },
  };

  const charVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className={className}
      style={{
        display: 'flex',
        overflow: 'hidden',
        ...style,
      }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          transition={{
            duration,
            ease,
          }}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export { AnimatedCharacters };
export type { AnimatedCharactersProps };
