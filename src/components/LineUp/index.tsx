import { useState } from "react"
import { styled } from "styled-components"
import { Artist, schedule } from "./data"
import { LineUpList } from "./partials/LineUpList"
// import rightDiamond from "../../img/music-festival/right-diamond.png"
// import { Modal } from "../Modal"
// import { Title } from "../Title"

enum DayHighlight {
  FULL = "FULL",
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
}

function LineUp() {
  const [highlightedDay, setHighlightedDay] = useState(DayHighlight.FULL)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)

  console.log(modalOpen)
  console.log(selectedArtist)
  /**
   * Sets the highlighted day in the lineup.
   * @param day - The day to highlight.
   */
  const higlightDay = (day: DayHighlight): void => {
    setHighlightedDay(day)
  }

  /**
   * Checks if a specific day is currently highlighted.
   * @param index - The index of the day to check (0-based).
   * @returns True if the day is highlighted, false otherwise.
   */
  const isHighlighted = (index: number): boolean => {
    return highlightedDay === index + 1
  }

  /**
   * Handles the click event on an artist, opening the modal with artist details.
   * @param artist - The artist object that was clicked.
   */
  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist)
    setModalOpen(true)
  }

  return (
    <SectionWrapper id="lineup">
      <h2>Line Up</h2>
      <DaysContainer>
        <FullLineUp
          onClick={() => higlightDay(DayHighlight.FULL)}
          gradientTo={dayColors[1]}
          color={dayColors[0]}
        >
          <span>FULL</span>
          <span>LINE-UP</span>
        </FullLineUp>
        <Day
          color={dayColors[0]}
          onClick={() => higlightDay(DayHighlight.ONE)}
          gradientTo={dayColors[1]}
          isActive={highlightedDay === DayHighlight.ONE}
          className="nasalization"
        >
          <span>DAY ONE</span>
          <span>Nov. 20</span>
        </Day>
        <Day
          color={dayColors[1]}
          onClick={() => higlightDay(DayHighlight.TWO)}
          gradientTo={dayColors[2]}
          isActive={highlightedDay === DayHighlight.TWO}
        >
          <span>DAY TWO</span>
          <span>Nov. 21</span>
        </Day>
        <Day
          color={dayColors[2]}
          onClick={() => higlightDay(DayHighlight.THREE)}
          gradientTo={dayColors[3]}
          isActive={highlightedDay === DayHighlight.THREE}
        >
          <span>DAY THREE</span>
          <span>Nov. 22</span>
        </Day>
        <Day
          color={dayColors[3]}
          onClick={() => higlightDay(DayHighlight.FOUR)}
          gradientTo={dayColors[3]}
          isActive={highlightedDay === DayHighlight.FOUR}
        >
          <span>DAY FOUR</span>
          <span>Nov. 23</span>
        </Day>
      </DaysContainer>
      <Container>
        <BackgroundImage />
        <Content>
          <Timeline columns={timeSlots.length}>
            <TimelineLine />
            {timeSlots.map((time) => (
              <TimeSlot key={time}>
                {/* <TimeDiamond src={rightDiamond} alt="diamond" /> */}
                <TimeText>{time} UTC</TimeText>
                {time === "00:00" && <TimeText>17:00 PST</TimeText>}
                {time === "1:00" && <TimeText>18:00 PST</TimeText>}
                {time !== "00:00" && time !== "1:00" && (
                  <TimeText>
                    {parseInt(time) >= 7
                      ? parseInt(time) - 7
                      : parseInt(time) + 17}
                    :00 PST
                  </TimeText>
                )}
              </TimeSlot>
            ))}
          </Timeline>
          <ScheduleContainer>
            {schedule.map((day, index) => (
              <DayRow
                key={day.name}
                highlighted={isHighlighted(index)}
                highlightColor={dayColors[index]}
                inactive={
                  !isHighlighted(index) && highlightedDay !== DayHighlight.FULL
                }
              >
                <LeftDayLabel color={dayColors[index]}>
                  <div>{day.name.split(" ")[1]}</div>
                  <div>{day.name.split(" ")[0]}</div>
                </LeftDayLabel>
                <ArtistContainer
                  color={dayColors[index]}
                  columns={timeSlots.length}
                >
                  {timeSlots.map((time) => {
                    const artist = day.artists.find((a) => a.time === time)
                    return (
                      <ArtistColumn key={`${day.name}-${time}`}>
                        {artist ? (
                          <ArtistCard
                            color={dayColors[index]}
                            onClick={() => handleArtistClick(artist)}
                          >
                            {artist.logoLineUp && (
                              <ArtistLogo
                                src={artist.logoLineUp}
                                alt={artist.name}
                              />
                            )}
                            {!artist.logoLineUp && (
                              <ArtistName>{artist.name}</ArtistName>
                            )}
                            <ArtistTime color={dayColors[index]}>
                              {artist.isReplay
                                ? `${artist.time} - REPLAY`
                                : artist.time}
                            </ArtistTime>
                          </ArtistCard>
                        ) : (
                          <EmptySlot></EmptySlot>
                        )}
                      </ArtistColumn>
                    )
                  })}
                </ArtistContainer>
                <RightDayLabel color={dayColors[index]}>
                  <div>{day.name.split(" ")[1]}</div>
                  <div>{day.name.split(" ")[0]}</div>
                </RightDayLabel>
              </DayRow>
            ))}
          </ScheduleContainer>
        </Content>
      </Container>
      <LineUpList />
      <div>
        {/* {modalOpen && (
          <Modal
            onClose={() => setModalOpen(false)}
            artist={selectedArtist as Artist}
          />
        )} */}
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  overflow-x: auto;
  max-width: 100vw;
  position: relative;
`

const DaysContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem;
  max-width: 100%;
  margin: 0 auto;
  gap: 1rem;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1240px) {
    justify-content: center;
    gap: 120px;
    max-width: 1240px;
  }
`

const ArtistLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 100px;
  margin-inline: auto;
  max-height: 40px;
`

const Day = styled.div<{
  gradientTo?: string
  isActive?: boolean
  color: string
}>`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Nasalization Rg", sans-serif !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.color};
  border-radius: 0.25rem;
  padding: 12px 24px;
  background-color: #000;
  min-width: 140px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  letter-spacing: 2px;
  transition: box-shadow 0.2s ease-in-out;
  will-change: box-shadow;

  ${(props) =>
    props.isActive &&
    `
    box-shadow: 0 0 20px 0 ${props.color}99;
    transition: box-shadow 0.2s ease-in-out;
    will-change: box-shadow;
  `}

  span {
    color: ${(props) => props.color} !important;

    &:first-child {
      font-size: 0.55rem;
      font-family: "Inter", sans-serif;
    }

    &:last-child {
      font-size: 1rem;
    }
  }

  ${(props) =>
    props.gradientTo &&
    `

    &::after {
      content: '';
      position: absolute;
      right: 100%;
      width: 120px;
      height: 2px;
      z-index: 0;
      background: linear-gradient(to right, ${props.color}, ${props.gradientTo});
      display: none;

      @media (min-width: 1240px) {
        display: block;
      }
    }
  `}
`
const FullLineUp = styled(Day)`
  min-width: 140px;
  border: none;
  background: linear-gradient(to right, #3effa3, #56a7ff, #fb01ff);
  span {
    color: #000 !important;
    font-size: 1.25rem;
    font-family: "Nasalization Rg", sans-serif !important;
  }

  &::after {
    display: none;
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("/placeholder.svg?height=1080&width=1920");
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem;
  min-width: max-content;
`

const Timeline = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    minmax(100px, 1fr)
  );
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  margin-left: 30px;
`

const TimelineLine = styled.div`
  position: absolute;
  width: 100%;
  top: 4px;
  left: 0;
  height: 1px;
  background-color: white;
  z-index: 1;
`

const TimeSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  min-width: 100px;
`

// const TimeDiamond = styled.img`
//   width: 24px;
//   height: 24px;
//   top: -15px;
//   z-index: 2;
//   position: relative;
// `

const TimeText = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DayRow = styled.div<{
  highlighted: boolean
  inactive: boolean
  highlightColor: string
}>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color, opacity;
  background-color: ${(props) =>
    props.highlighted ? `${props.highlightColor}33` : "transparent"};
  opacity: ${(props) => (props.inactive ? 0.5 : 1)};
  pointer-events: ${(props) => (props.inactive ? "none" : "auto")};
`

const DayLabel = styled.div<{ color: string }>`
  writing-mode: vertical-lr;
  font-size: 1rem;
  font-weight: bold;
  background-color: #000;
  color: ${(props) => props.color};
  position: sticky;
  z-index: 1;
  display: flex;
  font-family: "Inter", sans-serif;
  border: 2px solid ${(props) => props.color};
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    height: 100%;

    &:first-child {
      color: ${(props) => props.color};
      font-size: 0.75rem;
    }

    &:last-child {
      font-size: 0.75rem;
      background-color: ${(props) => props.color};
      color: #000;
      width: 100%;
    }
  }
`

const LeftDayLabel = styled(DayLabel)`
  left: 0;
  transform: rotate(180deg);
`

const RightDayLabel = styled(DayLabel)`
  position: sticky;
  right: 0;
  margin-left: 0.5rem;
`

const ArtistContainer = styled.div<{ columns: number; color: string }>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    minmax(100px, 1fr)
  );
  font-family: "Inter", sans-serif;
  align-items: start;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;
  gap: 0.25rem;
  padding-left: 0.25rem;
  flex-grow: 1;

  &:hover {
    transition: background-color 0.2s ease-in-out;
  }
`

const ArtistColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100px;
`

const ArtistCard = styled.div<{ color: string }>`
  width: 100%;
  padding: 0.25rem;
  border: 2px solid ${(props) => props.color};
  border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  will-change: transform, box-shadow;
  height: 65px;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
  }
`

const ArtistName = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`

const ArtistTime = styled.div<{ color: string }>`
  font-size: 0.8rem;
  color: ${(props) => props.color};
`

const EmptySlot = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  min-height: 50px;
`

const dayColors = ["#3EFFA3", "#56A7FF", "#A35AFF", "#EF0DFF"]
const timeSlots = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
]

export { LineUp }
