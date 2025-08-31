import { useState } from "react"
import {
  ScheduleContainer,
  DatePickerContainer,
  DateButton,
  ScheduleDisplayContainer,
  TimezoneHeader,
  ScheduleGrid,
  ScheduleRow,
  StageLabel,
  EventSlot,
  EmptySlot,
} from "./schedule.styled"
import { scheduleData, dateOptions, timeSlots, stages, ScheduleEvent } from "./data"

const getEventIcon = (type: string) => {
  switch (type) {
    case "X Space":
      return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_936_1565)">
            <path d="M15.9997 8.51567C11.7083 8.77447 8.27427 12.2087 8.01547 16.5H7.98413C7.72533 12.2087 4.29127 8.77447 0 8.51567V8.48433C4.29127 8.22553 7.72533 4.79146 7.98413 0.5H8.01547C8.27427 4.79146 11.7083 8.22553 15.9997 8.48433V8.51567Z" fill="#43404A"/>
          </g>
          <defs>
            <clipPath id="clip0_936_1565">
              <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
          </defs>
        </svg>
      )
    case "Workshop":
      return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.85909 4.64205L12.1519 2.08099C12.4173 1.87457 12.7948 1.89808 13.0326 2.13582L15.0287 4.13195C15.2665 4.36969 15.29 4.74725 15.0836 5.01265L12.5232 8.30457C12.7186 9.09677 12.7224 9.94811 12.4963 10.792C11.8976 13.0265 9.87615 14.4991 7.66775 14.4991C5.33335 14.4991 2.33335 13.4978 0.666687 12.4978C3.31987 10.4978 2.69817 9.29104 3.00002 8.16451C3.70564 5.53109 6.22818 3.99294 8.85909 4.64205ZM11.1344 5.89445C11.1782 5.93675 11.2213 5.9798 11.2635 6.02359L12.0198 6.77993L13.6698 4.65861L12.506 3.49477L10.3846 5.14469L11.1344 5.89445Z" fill="#43404A"/>
        </svg>
      )
    case "Tour":
      return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00071 3.51902C9.56671 2.11333 11.9867 2.16 13.4951 3.67157C15.0036 5.18315 15.0554 7.59133 13.6524 9.162L7.99997 14.8233L2.34763 9.162C0.944739 7.59133 0.99718 5.17934 2.50495 3.67157C4.01442 2.1621 6.43017 2.11125 8.00071 3.51902Z" fill="#43404A"/>
        </svg>
      )
    case "Community":
      return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.33337 15.1666C1.33337 12.2211 3.72119 9.83329 6.66671 9.83329C9.61224 9.83329 12 12.2211 12 15.1666H1.33337ZM6.66671 9.16663C4.45671 9.16663 2.66671 7.37663 2.66671 5.16663C2.66671 2.95663 4.45671 1.16663 6.66671 1.16663C8.87671 1.16663 10.6667 2.95663 10.6667 5.16663C10.6667 7.37663 8.87671 9.16663 6.66671 9.16663ZM11.5752 10.6554C13.6322 11.1811 15.1786 12.9823 15.3224 15.1666H13.3334C13.3334 13.4268 12.6668 11.8426 11.5752 10.6554ZM10.2268 9.13789C11.3152 8.16143 12 6.74401 12 5.16663C12 4.22173 11.7543 3.33423 11.3233 2.56454C12.8502 2.86927 14 4.21639 14 5.83329C14 7.67496 12.5084 9.16663 10.6667 9.16663C10.5176 9.16663 10.3707 9.15683 10.2268 9.13789Z" fill="#43404A"/>
        </svg>
      )
    default:
      return null
  }
}

const getTimeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00004C1.33334 4.31814 4.31811 1.33337 8.00001 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667ZM8.00001 13.3334C10.9455 13.3334 13.3333 10.9456 13.3333 8.00004C13.3333 5.05452 10.9455 2.66671 8.00001 2.66671C5.05449 2.66671 2.66668 5.05452 2.66668 8.00004C2.66668 10.9456 5.05449 13.3334 8.00001 13.3334ZM8.66668 8.00004H11.3333V9.33337H7.33334V4.66671H8.66668V8.00004Z" fill="#435475"/>
  </svg>
)

const getCalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 0.75V2.25H11.25V0.75H12.75V2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25H5.25V0.75H6.75ZM15 8.25H3V14.25H15V8.25ZM5.25 3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75H6.75V5.25H5.25V3.75Z" fill="#161518"/>
  </svg>
)

const getDropdownIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.82368 5.02059L3.16395 4.70103C3.24902 4.62114 3.38513 4.62114 3.47019 4.70103L4.94185 6.08314C5.02692 6.16303 5.16302 6.16303 5.24809 6.08314L6.71975 4.70902C6.80481 4.62913 6.94092 4.62913 7.02599 4.70902L7.36625 5.02858C7.45132 5.10847 7.45132 5.2363 7.36625 5.31619L5.24809 7.30546C5.16302 7.38535 5.02692 7.38535 4.94185 7.30546L2.82368 5.31619C2.73862 5.2363 2.73862 5.10847 2.82368 5.02059Z" fill="#33435C"/>
  </svg>
)

// Function to detect current date and return appropriate default
const getDefaultDate = () => {
  const today = new Date()
  const currentMonth = today.getMonth() + 1 // getMonth() is 0-indexed
  const currentDay = today.getDate()
  
  // Check if we're in September and within the date range
  if (currentMonth === 9) { // September
    if (currentDay >= 23 && currentDay <= 27) {
      return `sept-${currentDay}`
    }
  }
  
  // Default to September 23 if not in range
  return "sept-23"
}

const Schedule = () => {
  const [activeDate, setActiveDate] = useState(getDefaultDate())

  // Calculate cell width based on time duration (140px per hour slot)
  const calculateCellWidth = (duration: number) => {
    return 140 * duration
  }

  // Create grid layout for a specific stage
  const renderStageRow = (stageName: string) => {
    const stageEvents = scheduleData[activeDate]?.[stageName] || []
    const grid = Array(timeSlots.length).fill(null)
    const usedSlots = new Set<number>()

    // Place events in their time slots
    stageEvents.forEach((event: ScheduleEvent) => {
      for (let i = event.timeSlotStart; i < event.timeSlotStart + event.duration && i < timeSlots.length; i++) {
        if (i === event.timeSlotStart) {
          grid[i] = event
        } else {
          usedSlots.add(i)
        }
      }
    })

    const stageContent = grid.map((item, index) => {
      if (usedSlots.has(index)) {
        return null // Skip slots that are part of a multi-slot event
      }

      if (item) {
        const event = item as ScheduleEvent
        const cellWidth = calculateCellWidth(event.duration)

        return (
          <EventSlot 
            key={`event-${event.id}`} 
            width={cellWidth}
          >
            <div className="event-content">
              <div className="event-info">
                <div className="event-title">{event.title}</div>
                <div className="event-speaker">{event.speaker}</div>
              </div>
              <div className="event-details">
                <div className="event-type">
                  <div className="type-icon">{getEventIcon(event.type)}</div>
                  <div className="type-text">{event.type}</div>
                </div>
                <div className="event-time">
                  <div className="time-icon">{getTimeIcon()}</div>
                  <div className="time-text">UTC: {event.startTime} - {event.endTime}</div>
                  <div className="calendar-icon">{getCalendarIcon()}</div>
                </div>
              </div>
            </div>
          </EventSlot>
        )
      }

      return <EmptySlot key={`empty-${stageName}-${index}`} />
    })

    return (
      <ScheduleRow key={stageName}>
        <StageLabel>
          <div className="stage-text">{stageName}</div>
        </StageLabel>
        {stageContent}
      </ScheduleRow>
    )
  }

  return (
    <ScheduleContainer>
      <div className="schedule__inner-container">
        <h2>Schedule</h2>

        {/* Component 1: Date Picker */}
        <DatePickerContainer>
          {dateOptions.map((option) => (
            <DateButton
              key={option.key}
              $isActive={activeDate === option.key}
              onClick={() => setActiveDate(option.key)}
            >
              <div className="date-content">
                <div className="date">{option.date}</div>
                <div className="day-label">{option.label}</div>
              </div>
            </DateButton>
          ))}
        </DatePickerContainer>

        {/* Component 2: Schedule Display */}
        <ScheduleDisplayContainer>
          <TimezoneHeader>
            <div className="timezone-selector">
              <div className="timezone-text">Timezone (UTC)</div>
              <div className="dropdown-icon">{getDropdownIcon()}</div>
            </div>
            <div className="time-slots">
              {timeSlots.map((time, index) => (
                <div key={index} className="time-slot">
                  {time}
                </div>
              ))}
            </div>
          </TimezoneHeader>

          <ScheduleGrid>
            {stages.map(stageName => renderStageRow(stageName))}
          </ScheduleGrid>
        </ScheduleDisplayContainer>
      </div>
    </ScheduleContainer>
  )
}

export default Schedule
