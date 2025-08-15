import { useEffect, useState } from 'react';
import { FaApple, FaWindows } from 'react-icons/fa6';
import { css, styled } from 'styled-components';
import { useAdvancedUserAgentData } from '../../hooks/useAdvancedUserAgentData';
import { useResizePage } from '../../hooks/useResizePage';
import { theme } from '../../utils/theme';
import btnBg from '../../../public/img/about/tree.png';

enum DownloadLinks {
  MAC_ARM64 = 'https://explorer-artifacts.decentraland.org/launcher-rust/Decentraland_aarch64.dmg',
  MAC_X64 = 'https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-mac-x64.dmg',
  WIN_X64 = 'https://explorer-artifacts.decentraland.org/launcher-rust/Decentraland_x64-setup.exe',
  UNKNOWN = '',
  MOBILE_REDIRECT = 'https://decentraland.org/download/',
}

interface DownloadBtnProps {
  className?: string;
  showAvailableOnText?: boolean;
  variant?: 'cosmicGlass' | 'default';
}

const DownloadBtn = ({
  className,
  showAvailableOnText = true,
  variant = 'default',
}: DownloadBtnProps) => {
  const [downloadLink, setDownloadLink] = useState('');
  const { isMobile } = useResizePage({ size: 568 });
  const [isMac, setIsMac] = useState(false);
  const [isWindows, setIsWindows] = useState(false);
  const [isKnownMacArch, setIsKnownMacArch] = useState(true);
  const [isLoadingUserAgentData, userAgentData] = useAdvancedUserAgentData();

  console.log('variant', variant);

  useEffect(() => {
    if (userAgentData) {
      getUserAgentData();
    }
  }, [userAgentData]);

  const isMobileDevice = () => {
    if (isMobile) return true;
    if (!userAgentData) return false;
    return userAgentData.mobile;
  };

  const getUserAgentData = () => {
    if (!userAgentData) return;

    const isMacOS = userAgentData?.os.name?.includes('macOS') ?? false;
    const isWin = userAgentData?.os.name?.includes('Windows') ?? false;
    const mobileDevice = isMobileDevice();

    setIsMac(isMacOS);
    setIsWindows(isWin);

    if (mobileDevice) {
      setDownloadLink(DownloadLinks.MOBILE_REDIRECT);
      return;
    }

    if (isMacOS) {
      if (!userAgentData.cpu.architecture) {
        setIsKnownMacArch(false);
        setDownloadLink(DownloadLinks.MAC_ARM64);
      } else if (userAgentData.cpu.architecture.includes('arm')) {
        setDownloadLink(DownloadLinks.MAC_ARM64);
        setIsKnownMacArch(true);
      } else {
        setDownloadLink(DownloadLinks.MAC_X64);
        setIsKnownMacArch(true);
      }
    } else if (isWin) {
      setDownloadLink(DownloadLinks.WIN_X64);
    } else {
      setDownloadLink(DownloadLinks.UNKNOWN);
    }
  };

  const handleDownloadLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const mobileDevice = isMobileDevice();

      if (typeof analytics !== 'undefined' && !mobileDevice) {
        analytics.track('Download', {
          href: e.currentTarget.href,
          section: 'Carreer Quest Hero',
        });
      }
    } catch (error) {
      window.open(e.currentTarget.href, '_blank');
    }
  };

  const renderDownloadButton = () => {
    const mobileDevice = isMobileDevice();
    if (mobileDevice) {
      return (
        <DownloadButton
          className={className}
          href={DownloadLinks.MOBILE_REDIRECT}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadLink}
          variant={variant}
        >
          DOWNLOAD DECENTRALAND
        </DownloadButton>
      );
    }

    if (isMac && !isKnownMacArch) {
      return (
        <div className="mac-buttons-container">
          <DownloadButton
            className={className}
            href={DownloadLinks.MAC_ARM64}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadLink}
            variant={variant}
          >
            DOWNLOAD FOR MAC (APPLE SILICON)
            <FaApple />
          </DownloadButton>
          <DownloadButton
            className={className}
            href={DownloadLinks.MAC_X64}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadLink}
            variant={variant}
          >
            DOWNLOAD FOR MAC (INTEL)
            <FaApple />
          </DownloadButton>
        </div>
      );
    }

    if (userAgentData && (isMac || isWindows)) {
      return (
        <DownloadButton
          className={className}
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadLink}
          variant={variant}
        >
          {isMac && !isWindows ? (
            <>
              DOWNLOAD FOR MAC OS
              <FaApple />
            </>
          ) : null}
          {isWindows ? (
            <>
              DOWNLOAD FOR WINDOWS
              <FaWindows />
            </>
          ) : null}
        </DownloadButton>
      );
    }

    return null;
  };

  if (isLoadingUserAgentData || !userAgentData) return null;

  return (
    <DownloadButtonsContainer>
      {renderDownloadButton()}
      {!isMobile &&
        (isMac || isWindows) &&
        isKnownMacArch &&
        showAvailableOnText && (
          <a
            className="available-on-text"
            href={isMac ? DownloadLinks.WIN_X64 : DownloadLinks.MAC_ARM64}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadLink}
          >
            Also available on {isMac ? <FaWindows /> : <FaApple />}
          </a>
        )}
    </DownloadButtonsContainer>
  );
};

const DownloadButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;

  .available-on-text {
    padding-top: 16px;
  }
`;

const DownloadButton = styled.a<{ variant?: 'cosmicGlass' | 'default' }>`
  position: relative;
  background: ${({ variant }) =>
    variant !== 'cosmicGlass' && 'rgba(252, 252, 252, 0.25)'};
  background-image: ${({ variant }) =>
    variant === 'cosmicGlass' && `url(${btnBg})`};
  background-position: center;
  background-repeat: no-repeat;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.white};
  cursor: pointer;
  will-change: transform;
  transition: all 300ms;
  backdrop-filter: blur(6px);
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.1);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  overflow: hidden;

  &:hover {
    backdrop-filter: blur(1px);
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.2);
  }

  ${({ variant }) =>
    variant === 'cosmicGlass' &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to top,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.1) 60%,
          rgba(255, 255, 255, 0.1) 100%
        );
        opacity: 0.9;
        z-index: -1;
        pointer-events: none;
      }
    `}

  svg {
    /* height: 32px;
    width: 32px; */
    height: 18px;
    width: 18px;
    position: relative;
    top: -2px;
  }
`;

const StyledDownloadBtn = styled(DownloadBtn)`
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
`;

export { StyledDownloadBtn as DownloadBtn };
