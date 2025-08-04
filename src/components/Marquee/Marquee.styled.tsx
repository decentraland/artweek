import { styled } from 'styled-components';
import { theme } from '../../utils/theme';

const MarqueeContainerWrapper = styled.div`
  width: 100%;
`;

const MarqueeContainer = styled.div<{ variant: 'light' | 'glass' }>`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  overflow: hidden;
  background-color: ${({ variant }) =>
    variant === 'light' ? theme.white : theme.black};
  > * {
    color: ${({ variant }) =>
      variant === 'light' ? theme.black : theme.white};
  }
  border-block: 1px solid
    ${({ variant }) => (variant === 'light' ? theme.black : theme.white)};
  padding-block: 0.7rem;
`;

const MarqueeWrapper = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
  width: 100%;

  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: marquee 200s linear infinite;

  &.clone {
    position: absolute;
    top: 0;
    left: 100%;
  }

  &:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const MarqueeItem = styled.span<{ variant: 'light' | 'glass' }>`
  font-size: 14px;
  font-weight: 900;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 0.375rem;
  letter-spacing: 0.08em;
  color: ${({ variant }) => (variant === 'light' ? theme.black : theme.white)};
`;

export {
  MarqueeContainerWrapper,
  MarqueeContainer,
  MarqueeWrapper,
  MarqueeContent,
  MarqueeItem,
};
