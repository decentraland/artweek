import { useState } from 'react';
import { styled } from 'styled-components';
import { useResizePage } from '../../hooks/useResizePage';
import { theme } from '../../utils/theme';
import { launchDesktopApp } from '../../utils/utils';
import { DownloadBtn } from '../DownloadBtn/DownloadBtn';
import { Modal } from '../Modal';

interface DownloadBtnProps {
  className?: string;
  showAvailableOnText?: boolean;
}

const JumpInBtn = ({ className }: DownloadBtnProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile } = useResizePage({ size: 568 });

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isMobile) {
      window.location.href = 'https://decentraland.org/download';
      return;
    }
    //TODO: change position
    const resp = await launchDesktopApp(
      e.currentTarget,
      'decentraland://?position=6%2C89',
    );
    if (resp) return;
    setIsModalOpen(true);
  };

  return (
    <>
      <DownloadButtonsContainer>
        <DownloadButton
          className={className}
          onMouseDown={(e) =>
            handleClick(e as React.MouseEvent<HTMLButtonElement>)
          }
        >
          <ButtonContent>JUMP IN</ButtonContent>
        </DownloadButton>
      </DownloadButtonsContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isDownloadModal
      >
        <ModalContent>
          <div>
            <h1>Launcher not installed</h1>
            <p>Please install the launcher to jump in</p>
          </div>
          <DownloadBtn showAvailableOnText={false} />
        </ModalContent>
      </Modal>
    </>
  );
};

const StyledJumpInBtn = styled(JumpInBtn)`
  .download-buttons-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }

  .mac-buttons-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .available-on-text {
    font-size: 16px;
    margin-top: 16px;
    color: ${theme.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 1px solid ${theme.white};
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const DownloadButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DownloadButton = styled.button`
  min-width: 340px;
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  background: rgba(252, 252, 252, 0.25);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  will-change: transform;
  transition: all 300ms;
  backdrop-filter: blur(6px);
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.1);

  &:hover {
    backdrop-filter: blur(2px);
  }

  @media (min-width: 568px) {
    min-width: 340px;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ModalContent = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export { StyledJumpInBtn as JumpInBtn };
