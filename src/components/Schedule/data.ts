// Schedule data for all days with proper time ranges and positions
export interface ScheduleEvent {
  id: number
  title: string
  speaker: string
  type: "X Space" | "Workshop" | "Tour" | "Community"
  startTime: string // e.g., "11:00"
  endTime: string // e.g., "12:00"
  timeSlotStart: number // index position for start time
  timeSlotEnd: number // index position for end time
  duration: number // number of time slots this event spans
}

export interface DaySchedule {
  [key: string]: ScheduleEvent[]
}

// Time slots mapping (14 total slots as per Figma design)
export const timeSlots = [
  "11:00 am",   // 0
  "Midday",     // 1 (12:00)
  "1:00 pm",    // 2
  "2:00 pm",    // 3
  "3:00 pm",    // 4
  "4:00 pm",    // 5
  "5:00 pm",    // 6
  "6:00 pm",    // 7
  "8:00 pm",    // 8
  "9:00 pm",    // 9
  "10:00 pm",   // 10
  "11:00 pm",   // 11
  "Midnight",   // 12
  "1:00 am"     // 13
]

export const scheduleData: DaySchedule = {
  "sept-23": [
    {
      id: 1,
      title: "Pre-Event Setup & Testing",
      speaker: "Art Week Team",
      type: "Community",
      startTime: "11:00",
      endTime: "13:00",
      timeSlotStart: 0,
      timeSlotEnd: 2,
      duration: 2
    },
    {
      id: 2,
      title: "Artist Registration & Check-in",
      speaker: "Registration Team",
      type: "Community",
      startTime: "14:00",
      endTime: "16:00",
      timeSlotStart: 3,
      timeSlotEnd: 5,
      duration: 2
    },
    {
      id: 3,
      title: "Technical Rehearsal for Main Stage",
      speaker: "Technical Team",
      type: "Workshop",
      startTime: "17:00",
      endTime: "20:00",
      timeSlotStart: 6,
      timeSlotEnd: 8,
      duration: 3
    },
    {
      id: 4,
      title: "Welcome Reception for Artists",
      speaker: "Art Week Team",
      type: "Community",
      startTime: "21:00",
      endTime: "23:00",
      timeSlotStart: 9,
      timeSlotEnd: 11,
      duration: 2
    }
  ],

  "sept-24": [
    {
      id: 1,
      title: "The 101 on Decentraland Art Week: Launch Your Own Gallery!",
      speaker: "Bay Backner",
      type: "X Space",
      startTime: "11:00",
      endTime: "12:00",
      timeSlotStart: 0,
      timeSlotEnd: 1,
      duration: 1
    },
    {
      id: 2,
      title: "Behind the Build: How 7 Artists Turned Ideas into Immersive Art",
      speaker: "Dana Mart",
      type: "Workshop",
      startTime: "12:00",
      endTime: "14:00",
      timeSlotStart: 1,
      timeSlotEnd: 3,
      duration: 2
    },
    {
      id: 3,
      title: "Gallery Tour: Featured Artists Showcase",
      speaker: "Dana Mart",
      type: "Tour",
      startTime: "14:00",
      endTime: "15:00",
      timeSlotStart: 3,
      timeSlotEnd: 4,
      duration: 1
    },
    {
      id: 4,
      title: "Community Meetup: Artists & Collectors",
      speaker: "Community Team",
      type: "Community",
      startTime: "16:00",
      endTime: "18:00",
      timeSlotStart: 5,
      timeSlotEnd: 7,
      duration: 2
    },
    {
      id: 5,
      title: "Opening Night Gala",
      speaker: "Art Week Team",
      type: "Community",
      startTime: "20:00",
      endTime: "24:00",
      timeSlotStart: 8,
      timeSlotEnd: 12,
      duration: 4
    }
  ],

  "sept-25": [
    {
      id: 1,
      title: "Morning Coffee Chat with Artists",
      speaker: "Various Artists",
      type: "Community",
      startTime: "11:00",
      endTime: "12:00",
      timeSlotStart: 0,
      timeSlotEnd: 1,
      duration: 1
    },
    {
      id: 2,
      title: "Digital Art Creation Workshop",
      speaker: "Clara Bacou",
      type: "Workshop",
      startTime: "13:00",
      endTime: "15:00",
      timeSlotStart: 2,
      timeSlotEnd: 4,
      duration: 2
    },
    {
      id: 3,
      title: "VR Gallery Experience",
      speaker: "Tech Team",
      type: "Tour",
      startTime: "16:00",
      endTime: "17:00",
      timeSlotStart: 5,
      timeSlotEnd: 6,
      duration: 1
    },
    {
      id: 4,
      title: "NFT Minting Workshop",
      speaker: "Blockchain Experts",
      type: "Workshop",
      startTime: "18:00",
      endTime: "20:00",
      timeSlotStart: 7,
      timeSlotEnd: 8,
      duration: 2
    },
    {
      id: 5,
      title: "Evening Artist Talks",
      speaker: "Johanna Jaskowska",
      type: "X Space",
      startTime: "21:00",
      endTime: "22:00",
      timeSlotStart: 9,
      timeSlotEnd: 10,
      duration: 1
    }
  ],

  "sept-26": [
    {
      id: 1,
      title: "Collector's Breakfast",
      speaker: "Art Collectors",
      type: "Community",
      startTime: "11:00",
      endTime: "12:00",
      timeSlotStart: 0,
      timeSlotEnd: 1,
      duration: 1
    },
    {
      id: 2,
      title: "Interactive Art Installation Demo",
      speaker: "Sara Shakeel",
      type: "Workshop",
      startTime: "13:00",
      endTime: "14:00",
      timeSlotStart: 2,
      timeSlotEnd: 3,
      duration: 1
    },
    {
      id: 3,
      title: "NFT Marketplace Deep Dive",
      speaker: "Marketplace Experts",
      type: "X Space",
      startTime: "14:00",
      endTime: "16:00",
      timeSlotStart: 3,
      timeSlotEnd: 5,
      duration: 2
    },
    {
      id: 4,
      title: "Guided Gallery Tour",
      speaker: "Gallery Curators",
      type: "Tour",
      startTime: "17:00",
      endTime: "18:00",
      timeSlotStart: 6,
      timeSlotEnd: 7,
      duration: 1
    },
    {
      id: 5,
      title: "Artist Panel Discussion",
      speaker: "Featured Artists",
      type: "Community",
      startTime: "20:00",
      endTime: "22:00",
      timeSlotStart: 8,
      timeSlotEnd: 10,
      duration: 2
    },
    {
      id: 6,
      title: "Late Night Networking",
      speaker: "Community",
      type: "Community",
      startTime: "23:00",
      endTime: "01:00",
      timeSlotStart: 11,
      timeSlotEnd: 13,
      duration: 2
    }
  ],

  "sept-27": [
    {
      id: 1,
      title: "Final Day Kickoff",
      speaker: "Art Week Team",
      type: "Community",
      startTime: "11:00",
      endTime: "12:00",
      timeSlotStart: 0,
      timeSlotEnd: 1,
      duration: 1
    },
    {
      id: 2,
      title: "Artist Portfolio Review Session",
      speaker: "Art Critics",
      type: "Workshop",
      startTime: "13:00",
      endTime: "15:00",
      timeSlotStart: 2,
      timeSlotEnd: 4,
      duration: 2
    },
    {
      id: 3,
      title: "Final Gallery Tours",
      speaker: "Gallery Curators",
      type: "Tour",
      startTime: "15:00",
      endTime: "18:00",
      timeSlotStart: 4,
      timeSlotEnd: 7,
      duration: 3
    },
    {
      id: 4,
      title: "Awards Ceremony",
      speaker: "Art Week Team",
      type: "X Space",
      startTime: "19:00",
      endTime: "20:00",
      timeSlotStart: 8,
      timeSlotEnd: 9,
      duration: 1
    },
    {
      id: 5,
      title: "Art Week Closing Ceremony",
      speaker: "Art Week Team",
      type: "Community",
      startTime: "21:00",
      endTime: "24:00",
      timeSlotStart: 9,
      timeSlotEnd: 12,
      duration: 3
    }
  ]
}

export const dateOptions = [
  { key: "sept-23", date: "SEPT 23", label: "Pre event" },
  { key: "sept-24", date: "SEPT 24", label: "Day One" },
  { key: "sept-25", date: "SEPT 25", label: "Day Two" },
  { key: "sept-26", date: "SEPT 26", label: "Day Three" },
  { key: "sept-27", date: "SEPT 27", label: "Day Four" },
]
