import { motion } from 'framer-motion';
import {
  ReactNode,
  ReactElement,
  isValidElement,
  useEffect,
  useState,
} from 'react';

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
  repeatOnce?: boolean;
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
  repeatOnce = false,
}: AnimatedCharactersProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && repeatOnce && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, repeatOnce, hasAnimated]);

  // Function to extract text content from React nodes
  const extractTextFromNode = (node: ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return node.toString();
    if (isValidElement(node)) {
      const element = node as ReactElement;
      if (element.props.children) {
        if (Array.isArray(element.props.children)) {
          return element.props.children.map(extractTextFromNode).join('');
        }
        return extractTextFromNode(element.props.children);
      }
    }
    if (Array.isArray(node)) return node.map(extractTextFromNode).join('');
    return '';
  };

  const text = extractTextFromNode(children);
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

  const shouldAnimate = repeatOnce ? hasAnimated : isVisible;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
      className={className}
      style={{
        display: 'flex',
        overflow: 'hidden',
        ...style,
      }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={`--char-${index}`}
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
