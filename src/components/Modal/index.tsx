import { useEffect } from 'react';
import { styled } from 'styled-components';
import { breakpoints, theme } from '../../utils/theme';
import { useLenis } from '../../hooks/useLenis';

// Tipos
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isDownloadModal?: boolean;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  isDownloadModal = false,
}: ModalProps) => {
  const { stop, start } = useLenis();
  useEffect(() => {
    if (isOpen) {
      stop();
    } else {
      start();
    }

    return () => {
      start();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        isDownloadModal={isDownloadModal}
      >
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div<{ isDownloadModal?: boolean }>`
  position: relative;
  max-width: 600px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 32px;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.2),
    0px 0px 10px 0px rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.9);
  color: #fff;
  backdrop-filter: blur(10px);
  will-change: transform;
  transition: all 300ms;

  @media (min-width: ${breakpoints.md}) {
    width: 70%;
  }

  ${({ isDownloadModal }) =>
    isDownloadModal &&
    `
    max-width: 500px;
    margin: 0 auto;
  `}
  padding-block: ${({ isDownloadModal }) =>
    isDownloadModal ? '48px' : '24px'};

  * {
    color: ${theme.black};
  }
`;

export { Modal };
