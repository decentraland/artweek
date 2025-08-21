import React from 'react';
import { styled } from 'styled-components';
import { DownloadBtn } from '../DownloadBtn/DownloadBtn';
import { breakpoints } from '../../utils/theme';

interface DiscoverDclBtnProps {
  className?: string;
  title?: string;
  description?: string;
}

const DiscoverDclBtn: React.FC<DiscoverDclBtnProps> = ({ className }) => {
  return (
    <DiscoverDclBtnContainer className={className}>
      <ContentWrapper>
        <div className="discover-dcl-btn__title">
          <h3>Discover Decentraland</h3>
          <p>Explore on your computer—it’s free.</p>
        </div>
        <DownloadBtnWrapper>
          <DownloadBtn variant={'default'} showAvailableOnText={false} />
        </DownloadBtnWrapper>
      </ContentWrapper>
    </DiscoverDclBtnContainer>
  );
};

const DiscoverDclBtnContainer = styled.div`
  position: relative;
  background: rgba(252, 252, 252, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease;
  width: 100%;
  overflow: hidden;
  max-width: 600px;
  border-radius: 8px;
  background: rgba(56, 64, 97, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 12px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.02) 100%
    );
    opacity: 0;
    transition: opacity 300ms ease;
    pointer-events: none;
  }

  &:hover {
    /* transform: translateY(-1px); */
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 400px;
    max-width: 400px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: auto;

  .discover-dcl-btn__title {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
    justify-content: flex-start;

    h3 {
      font-size: 20px;
      font-weight: 800;
      text-transform: uppercase;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const DownloadBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default DiscoverDclBtn;
