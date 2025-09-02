// Schedule data for all days with proper time ranges and positions
interface ScheduleEvent {
  id: number
  title: string
  speaker: string
  type: "X Space" | "Workshop" | "Tour" | "Community"
  stage: "MainStage" | "X Space" | "Workshop" | "Tour"
  startTime: string // e.g., "11:00"
  endTime: string // e.g., "12:00"
  timeSlotStart: number // index position for start time
  timeSlotEnd: number // index position for end time
  duration: number // number of time slots this event spans
}

interface StageSchedule {
  [stageName: string]: ScheduleEvent[]
}

interface DaySchedule {
  [key: string]: StageSchedule
}

// Time slots mapping (14 total slots as per Figma design)
const timeSlots = [
  "11:00 am", // 0
  "Midday", // 1 (12:00)
  "1:00 pm", // 2
  "2:00 pm", // 3
  "3:00 pm", // 4
  "4:00 pm", // 5
  "5:00 pm", // 6
  "6:00 pm", // 7
  "8:00 pm", // 8
  "9:00 pm", // 9
  "10:00 pm", // 10
  "11:00 pm", // 11
  "Midnight", // 12
  "1:00 am", // 13
]

const stages = ["MainStage", "X Space", "Workshop", "Tour"]

const scheduleData: DaySchedule = {
  "sept-23": {
    MainStage: [
      {
        id: 1,
        title: "Pre-Event Setup & Testing",
        speaker: "Art Week Team",
        type: "Community",
        stage: "MainStage",
        startTime: "11:00",
        endTime: "13:00",
        timeSlotStart: 0,
        timeSlotEnd: 2,
        duration: 2,
      },
      {
        id: 2,
        title: "Artist Registration & Check-in",
        speaker: "Registration Team",
        type: "Community",
        stage: "MainStage",
        startTime: "14:00",
        endTime: "16:00",
        timeSlotStart: 3,
        timeSlotEnd: 5,
        duration: 2,
      },
    ],
    "X Space": [
      {
        id: 3,
        title: "Virtual Art Spaces Discussion",
        speaker: "Space Creators",
        type: "X Space",
        stage: "X Space",
        startTime: "15:00",
        endTime: "16:00",
        timeSlotStart: 4,
        timeSlotEnd: 5,
        duration: 1,
      },
    ],
    Workshop: [
      {
        id: 4,
        title: "Technical Rehearsal for Main Stage",
        speaker: "Technical Team",
        type: "Workshop",
        stage: "Workshop",
        startTime: "17:00",
        endTime: "20:00",
        timeSlotStart: 6,
        timeSlotEnd: 8,
        duration: 3,
      },
    ],
    Tour: [
      {
        id: 5,
        title: "Platform Orientation Tour",
        speaker: "Tour Guides",
        type: "Tour",
        stage: "Tour",
        startTime: "13:00",
        endTime: "14:00",
        timeSlotStart: 2,
        timeSlotEnd: 3,
        duration: 1,
      },
    ],
  },

  "sept-24": {
    MainStage: [
      {
        id: 1,
        title: "The 101 on Decentraland Art Week: Launch Your Own Gallery!",
        speaker: "Bay Backner",
        type: "X Space",
        stage: "MainStage",
        startTime: "11:00",
        endTime: "12:00",
        timeSlotStart: 0,
        timeSlotEnd: 1,
        duration: 1,
      },
      {
        id: 2,
        title: "Opening Night Gala",
        speaker: "Art Week Team",
        type: "Community",
        stage: "MainStage",
        startTime: "20:00",
        endTime: "24:00",
        timeSlotStart: 8,
        timeSlotEnd: 12,
        duration: 4,
      },
    ],
    "X Space": [
      {
        id: 3,
        title: "Virtual Reality Art Experiences",
        speaker: "VR Artists",
        type: "X Space",
        stage: "X Space",
        startTime: "13:00",
        endTime: "14:00",
        timeSlotStart: 2,
        timeSlotEnd: 3,
        duration: 1,
      },
    ],
    Workshop: [
      {
        id: 4,
        title:
          "Behind the Build: How 7 Artists Turned Ideas into Immersive Art",
        speaker: "Dana Mart",
        type: "Workshop",
        stage: "Workshop",
        startTime: "12:00",
        endTime: "14:00",
        timeSlotStart: 1,
        timeSlotEnd: 3,
        duration: 2,
      },
    ],
    Tour: [
      {
        id: 5,
        title: "Gallery Tour: Featured Artists Showcase",
        speaker: "Dana Mart",
        type: "Tour",
        stage: "Tour",
        startTime: "14:00",
        endTime: "15:00",
        timeSlotStart: 3,
        timeSlotEnd: 4,
        duration: 1,
      },
      {
        id: 6,
        title: "Community Meetup: Artists & Collectors",
        speaker: "Community Team",
        type: "Tour",
        stage: "Tour",
        startTime: "16:00",
        endTime: "18:00",
        timeSlotStart: 5,
        timeSlotEnd: 7,
        duration: 2,
      },
    ],
  },

  "sept-25": {
    MainStage: [
      {
        id: 1,
        title: "Morning Coffee Chat with Artists",
        speaker: "Various Artists",
        type: "Community",
        stage: "MainStage",
        startTime: "11:00",
        endTime: "12:00",
        timeSlotStart: 0,
        timeSlotEnd: 1,
        duration: 1,
      },
      {
        id: 2,
        title: "Evening Artist Talks",
        speaker: "Johanna Jaskowska",
        type: "X Space",
        stage: "MainStage",
        startTime: "21:00",
        endTime: "22:00",
        timeSlotStart: 9,
        timeSlotEnd: 10,
        duration: 1,
      },
    ],
    "X Space": [
      {
        id: 3,
        title: "Interactive Art Experiences",
        speaker: "Digital Artists",
        type: "X Space",
        stage: "X Space",
        startTime: "15:00",
        endTime: "17:00",
        timeSlotStart: 4,
        timeSlotEnd: 6,
        duration: 2,
      },
    ],
    Workshop: [
      {
        id: 4,
        title: "Digital Art Creation Workshop",
        speaker: "Clara Bacou",
        type: "Workshop",
        stage: "Workshop",
        startTime: "13:00",
        endTime: "15:00",
        timeSlotStart: 2,
        timeSlotEnd: 4,
        duration: 2,
      },
      {
        id: 5,
        title: "NFT Minting Workshop",
        speaker: "Blockchain Experts",
        type: "Workshop",
        stage: "Workshop",
        startTime: "18:00",
        endTime: "20:00",
        timeSlotStart: 7,
        timeSlotEnd: 8,
        duration: 2,
      },
    ],
    Tour: [
      {
        id: 6,
        title: "VR Gallery Experience",
        speaker: "Tech Team",
        type: "Tour",
        stage: "Tour",
        startTime: "16:00",
        endTime: "17:00",
        timeSlotStart: 5,
        timeSlotEnd: 6,
        duration: 1,
      },
    ],
  },

  "sept-26": {
    MainStage: [
      {
        id: 1,
        title: "Collector's Breakfast",
        speaker: "Art Collectors",
        type: "Community",
        stage: "MainStage",
        startTime: "11:00",
        endTime: "12:00",
        timeSlotStart: 0,
        timeSlotEnd: 1,
        duration: 1,
      },
      {
        id: 2,
        title: "Artist Panel Discussion",
        speaker: "Featured Artists",
        type: "Community",
        stage: "MainStage",
        startTime: "20:00",
        endTime: "22:00",
        timeSlotStart: 8,
        timeSlotEnd: 10,
        duration: 2,
      },
    ],
    "X Space": [
      {
        id: 3,
        title: "NFT Marketplace Deep Dive",
        speaker: "Marketplace Experts",
        type: "X Space",
        stage: "X Space",
        startTime: "14:00",
        endTime: "16:00",
        timeSlotStart: 3,
        timeSlotEnd: 5,
        duration: 2,
      },
    ],
    Workshop: [
      {
        id: 4,
        title: "Interactive Art Installation Demo",
        speaker: "Sara Shakeel",
        type: "Workshop",
        stage: "Workshop",
        startTime: "13:00",
        endTime: "14:00",
        timeSlotStart: 2,
        timeSlotEnd: 3,
        duration: 1,
      },
    ],
    Tour: [
      {
        id: 5,
        title: "Guided Gallery Tour",
        speaker: "Gallery Curators",
        type: "Tour",
        stage: "Tour",
        startTime: "17:00",
        endTime: "18:00",
        timeSlotStart: 6,
        timeSlotEnd: 7,
        duration: 1,
      },
    ],
  },

  "sept-27": {
    MainStage: [
      {
        id: 1,
        title: "Final Day Kickoff",
        speaker: "Art Week Team",
        type: "Community",
        stage: "MainStage",
        startTime: "11:00",
        endTime: "12:00",
        timeSlotStart: 0,
        timeSlotEnd: 1,
        duration: 1,
      },
      {
        id: 2,
        title: "Art Week Closing Ceremony",
        speaker: "Art Week Team",
        type: "Community",
        stage: "MainStage",
        startTime: "21:00",
        endTime: "24:00",
        timeSlotStart: 9,
        timeSlotEnd: 12,
        duration: 3,
      },
    ],
    "X Space": [
      {
        id: 3,
        title: "Awards Ceremony",
        speaker: "Art Week Team",
        type: "X Space",
        stage: "X Space",
        startTime: "19:00",
        endTime: "20:00",
        timeSlotStart: 8,
        timeSlotEnd: 9,
        duration: 1,
      },
    ],
    Workshop: [
      {
        id: 4,
        title: "Artist Portfolio Review Session",
        speaker: "Art Critics",
        type: "Workshop",
        stage: "Workshop",
        startTime: "13:00",
        endTime: "15:00",
        timeSlotStart: 2,
        timeSlotEnd: 4,
        duration: 2,
      },
    ],
    Tour: [
      {
        id: 5,
        title: "Final Gallery Tours",
        speaker: "Gallery Curators",
        type: "Tour",
        stage: "Tour",
        startTime: "15:00",
        endTime: "18:00",
        timeSlotStart: 4,
        timeSlotEnd: 7,
        duration: 3,
      },
    ],
  },
}

const dateOptions = [
  { key: "sept-23", date: "SEPT 23", label: "Pre event" },
  { key: "sept-24", date: "SEPT 24", label: "Day One" },
  { key: "sept-25", date: "SEPT 25", label: "Day Two" },
  { key: "sept-26", date: "SEPT 26", label: "Day Three" },
  { key: "sept-27", date: "SEPT 27", label: "Day Four" },
]

export type { ScheduleEvent, StageSchedule, DaySchedule }

export { timeSlots, stages, scheduleData, dateOptions }
