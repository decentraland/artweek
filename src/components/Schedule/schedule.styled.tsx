import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

export const ScheduleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 100px 24px;
  background: ${theme.black};

  .schedule__inner-container {
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;
      color: ${theme.white};
      text-align: center;
      margin-bottom: 0;
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
  flex: 1 0 0;
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
  align-items: center;
  width: 100%;
  background: #FFF;
  border-radius: 8px;
  overflow: hidden;
  overflow-x: auto;
  
  /* Hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for firefox */
  scrollbar-width: none;
`

export const TimezoneHeader = styled.div`
  display: flex;
  height: 54px;
  padding: 16px 0;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  min-width: 2086px;
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
  min-height: 76px;
  align-items: flex-start;
  width: 100%;
  min-width: 2086px;

  .stage-label {
    display: flex;
    width: 106px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-top: 0.75px solid #FFF;
    border-right: 0.5px solid #FFF;
    border-bottom: 0.25px solid #FFF;
    background: #33435C;

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
  }

  .event-slot {
    display: flex;
    width: 391px;
    padding: 32px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 0.75px solid #203455;

    .event-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      align-self: stretch;

      .event-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;

        .event-title {
          align-self: stretch;
          color: #435475;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.5px;
        }

        .event-speaker {
          align-self: stretch;
          color: #435475;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.5px;
        }
      }

      .event-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;

        .event-type {
          display: flex;
          width: 135px;
          align-items: center;
          gap: 6px;

          .type-icon {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }

          .type-text {
            flex: 1 0 0;
            color: #43404A;
            font-family: "Inter", sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.5px;
          }
        }

        .event-time {
          display: flex;
          align-items: center;
          gap: 6px;
          align-self: stretch;

          .time-icon {
            width: 16px;
            height: 16px;
          }

          .time-text {
            flex: 1 0 0;
            color: #435475;
            font-family: "Inter", sans-serif;
            font-size: 12px;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.5px;
          }

          .calendar-icon {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }

  .empty-slot {
    display: flex;
    width: 140px;
    padding: 12px 10px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border: 0.75px solid #203455;
  }
`
