import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const ScheduleContainer = styled.div`
  background-color: ${theme.black};
  // arriba, derecha, abajo, izquierda
  padding: 20px 20px 40px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoints.md}) {
    padding: 40px 20px 80px 20px;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 50px 60px 100px 60px;
  }
`

const ScheduleContainerLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  @media (min-width: ${breakpoints.l}) {
    justify-content: flex-end;
    width: 40%;
  }
`

const ScheduleContainerRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${breakpoints.l}) {
    width: 60%;
    justify-content: flex-start;
  }
`

const TitleSchedule = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.white};
  letter-spacing: 0.1em;
  margin-right: 8px;
`

const TabsScheduleContainer = styled.div`
  width: 100%;
`

const TabsScheduleList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const TabScheduleButton = styled.button<{ $isActive: boolean }>`
  padding: 12px;
  height: 60px;
  background-color: ${({ $isActive }) =>
    $isActive ? theme.white : theme.customBlack};
  color: ${({ $isActive }) => ($isActive ? theme.customBlack : theme.white)};
  border-radius: 20px 20px 0 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 900;
  border: 2px solid ${theme.white};
  border-bottom: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  margin-top: 20px;

  &.tabButton {
    &:hover {
      background-color: ${({ $isActive }) =>
        $isActive ? theme.white : theme.customBlack600};
      color: ${({ $isActive }) =>
        $isActive ? theme.customBlack : theme.white};
      transition: all 0.3s ease;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: ${breakpoints.s}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 24px;
    height: 70px;
  }
`

const TabScheduleContent = styled.div`
  background-color: ${theme.customBlack};
  padding: 20px 24px;
  border: 2px solid ${theme.white};
  border-radius: 25px;
  z-index: 2;
  position: relative;
  margin-top: -20px;
`

const ScheduleList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

const ScheduleListItem = styled.li`
  width: 100%;
  color: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .date-container {
    width: 27%;
    display: flex;
    flex-direction: column;
  }

  .title-container {
    width: 73%;
  }

  .first-span {
    font-weight: 400;
    font-size: 16px;
  }

  .second-span {
    font-weight: 600;
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.s}) {
    justify-content: flex-start;

    .date-container {
      max-width: 100px;
    }

    .title-container {
      width: 70%;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    .date-container {
      flex-direction: row;
      justify-content: space-between;
      max-width: 200px;
    }

    .title-container {
      width: 73%;
    }
  }
`

export {
  ScheduleContainer,
  TitleSchedule,
  TabsScheduleContainer,
  TabsScheduleList,
  TabScheduleButton,
  TabScheduleContent,
  ScheduleList,
  ScheduleListItem,
  ScheduleContainerLeft,
  ScheduleContainerRight,
}
