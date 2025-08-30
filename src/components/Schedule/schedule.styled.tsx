import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

export const ScheduleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 120px 0 120px 0;
  background: ${theme.white};

  * {
    color: ${theme.black};
  }

  .schedule__inner-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 0 24px;

    h2 {
      font-size: 4rem;
      font-weight: 700;
      line-height: 1.2;
      color: ${theme.black};
      text-align: center;
      margin-bottom: 0;

      @media (max-width: ${breakpoints.md}) {
        font-size: 2.5rem;
      }
    }
  }
`

// Component 1: Date Picker
export const DatePickerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  overflow-x: auto;
  padding: 0 10px;
  
  /* Hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for firefox */
  scrollbar-width: none;
  
  @media (max-width: ${breakpoints.md}) {
    justify-content: flex-start;
    padding: 0 5px;
  }
`

export const DateButton = styled.button<{ $isActive?: boolean }>`
  display: flex;
  padding: 16px 62px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  min-width: 180px;
  border-radius: 40px;
  border: 1px solid rgba(55, 89, 144, 0.80);
  background: ${props => props.$isActive 
    ? 'linear-gradient(180deg, rgba(156, 171, 195, 0.80) 0%, rgba(156, 171, 195, 0.48) 100%), linear-gradient(180deg, rgba(156, 171, 195, 0.20) 0%, rgba(156, 171, 195, 0.12) 100%)'
    : 'linear-gradient(180deg, rgba(156, 171, 195, 0.20) 0%, rgba(156, 171, 195, 0.12) 100%)'
  };
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(180deg, rgba(156, 171, 195, 0.80) 0%, rgba(156, 171, 195, 0.48) 100%), linear-gradient(180deg, rgba(156, 171, 195, 0.20) 0%, rgba(156, 171, 195, 0.12) 100%);
  }

  .date-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;

    .date {
      color: #2F3A51;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.75px;
      text-transform: uppercase;
    }

    .day-label {
      color: #435475;
      font-family: "Inter", sans-serif;
      font-size: 11px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.5px;
    }
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 12px 40px;
    min-width: 150px;
    
    .date-content {
      .date {
        font-size: 14px;
      }
      
      .day-label {
        font-size: 10px;
      }
    }
  }
`

// Component 2: Schedule Display
export const ScheduleDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  background: #FFF;
  overflow-x: auto;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  transition: all 0.3s ease;

  /* Show scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const TimezoneHeader = styled.div`
  display: flex;
  height: 54px;
  padding: 16px 0;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  min-width: calc(106px + 140px * 14);
  border-top: 1px solid #203455;
  border-bottom: 1px solid #203455;
  background: #33435C;
  position: relative;

  .timezone-selector {
    display: flex;
    height: 18.681px;
    padding: 4.67px 6.227px;
    justify-content: center;
    align-items: center;
    gap: 1.868px;
    position: absolute;
    left: 13px;
    top: 16px;
    border-radius: 3.736px;
    border: 0.35px solid rgba(51, 67, 92, 0.20);
    background: #FCFCFC;
    cursor: pointer;

    .timezone-text {
      color: #33435C;
      text-align: center;
      font-family: "Inter", sans-serif;
      font-size: 7.472px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.234px;
    }

    .dropdown-icon {
      width: 9.34px;
      height: 9.34px;
    }
  }

  .time-slots {
    display: flex;
    padding-left: 150px;
    align-items: center;
    flex: 1;

    .time-slot {
      width: 140px;
      color: #FCFCFC;
      text-shadow: 0 4px 2px rgba(255, 255, 255, 0.15);
      font-family: "Inter", sans-serif;
      font-size: 13px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.5px;
    }
  }
`

export const ScheduleGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: calc(106px + 140px * 14);
`

export const ScheduleRow = styled.div`
  display: flex;
  height: 200px;
  align-items: stretch;
  width: 100%;
  min-width: calc(106px + 140px * 14);
  transition: all 0.3s ease;
`

export const StageLabel = styled.div`
  display: flex;
  width: 106px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-top: 0.75px solid #FFF;
  border-right: 1px solid #203455;
  border-bottom: 0.75px solid #203455;
  background: #33435C;
  flex-shrink: 0;

  .stage-text {
    color: #FCFCFC;
    text-shadow: 0 1px 7.6px rgba(255, 255, 255, 0.15);
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.75px;
    text-transform: uppercase;
  }
`

export const EventSlot = styled.div<{ width?: number }>`
  display: flex;
  height: 200px;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  border-right: 1px solid #203455;
  border-top: 0.75px solid #203455;
  border-bottom: 0.75px solid #203455;
  flex-shrink: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  width: ${props => props.width ? `${props.width}px` : '140px'};

  &:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }

  .event-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
    height: 100%;

    .event-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      width: 100%;

      .event-title {
        width: 100%;
        color: #435475;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .event-speaker {
        width: 100%;
        color: #435475;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.5px;
        opacity: 0.8;
      }
    }

    .event-details {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 4px;
      width: 100%;
      margin-top: auto;

      .event-type {
        display: flex;
        align-items: center;
        gap: 4px;

        .type-icon {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .type-text {
          color: #43404A;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.5px;
        }
      }

      .event-time {
        display: flex;
        align-items: center;
        gap: 4px;
        width: 100%;

        .time-icon {
          width: 14px;
          height: 14px;
        }

        .time-text {
          flex: 1;
          color: #435475;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.5px;
        }

        .calendar-icon {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
`

export const EmptySlot = styled.div`
  display: flex;
  width: 140px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #203455;
  border-top: 0.75px solid #203455;
  border-bottom: 0.75px solid #203455;
  flex-shrink: 0;
  background-color: #33435C;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }
`
