import { ScheduleTabs } from "./ScheduleTabs"
import { useResizePage } from "../../hooks/useResizePage"
import { DivVerticalLine } from "../../shared/common.styled"
import { JumpInBtn } from "../JumpInBtn/JumpInBtn"
import {
  ScheduleContainer,
  ScheduleContainerLeft,
  ScheduleContainerRight,
  TitleSchedule,
} from "./Schedule.styled"

const Schedule = () => {
  const { isMobile } = useResizePage({ size: 992 })

  return (
    <ScheduleContainer id="schedule">
      {isMobile ? (
        <ScheduleTabs />
      ) : (
        <>
          <ScheduleContainerLeft>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "20px",
              }}
            >
              <TitleSchedule>Schedule</TitleSchedule>

              <JumpInBtn />
            </div>

            <DivVerticalLine />
          </ScheduleContainerLeft>

          <ScheduleContainerRight>
            <ScheduleTabs />
          </ScheduleContainerRight>
        </>
      )}
    </ScheduleContainer>
  )
}

export { Schedule }
