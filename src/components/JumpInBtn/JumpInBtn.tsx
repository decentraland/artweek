import { css, styled } from "styled-components"
import btnBg from "../../../public/img/about/tree.png"
import { useAdvancedUserAgentData } from "../../hooks/useAdvancedUserAgentData"
import { useResizePage } from "../../hooks/useResizePage"
import { theme } from "../../utils/theme"

interface JumpInBtnProps {
  className?: string
  variant?: "cosmicGlass" | "default"
  customText?: string
}

const JumpInBtn = ({
  className,
  variant = "default",
  customText,
}: JumpInBtnProps) => {
  const { isMobile } = useResizePage({ size: 568 })
  const [isLoadingUserAgentData, userAgentData] = useAdvancedUserAgentData()
  const jumpInUrl = "https://decentraland.org/jump/?position=-140%2C-86"

  const handleJumpInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      if (typeof analytics !== "undefined" && !isMobile) {
        analytics.track("Jump In", {
          href: e.currentTarget.href,
          section: "Jump In Button",
        })
      }
    } catch (error) {
      window.open(e.currentTarget.href, "_blank")
    }
  }

  const renderJumpInButton = () => {
    return (
      <JumpInButton
        className={className}
        href={jumpInUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleJumpInClick}
        variant={variant}
      >
        {customText || "JUMP IN"}
      </JumpInButton>
    )
  }

  if (isLoadingUserAgentData || !userAgentData) return null

  return <JumpInButtonsContainer>{renderJumpInButton()}</JumpInButtonsContainer>
}

const JumpInButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`

const JumpInButton = styled.a<{ variant?: "cosmicGlass" | "default" }>`
  position: relative;
  background: ${({ variant }) =>
    variant !== "cosmicGlass" && "rgba(252, 252, 252, 0.25)"};
  background-image: ${({ variant }) =>
    variant === "cosmicGlass" && `url(${btnBg})`};
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

  &:hover {
    backdrop-filter: blur(1px);
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.2);
  }

  ${({ variant }) =>
    variant === "cosmicGlass" &&
    css`
      &::before {
        content: "";
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
    height: 18px;
    width: 18px;
    position: relative;
    top: -2px;
  }
`

const StyledJumpInBtn = styled(JumpInBtn)`
  .jump-in-buttons-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }
`

export { StyledJumpInBtn as JumpInBtn }
