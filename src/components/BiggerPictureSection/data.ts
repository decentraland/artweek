export interface ArtistLocation {
  id: string
  name: string
  width: number
  height: number
  left: number
  top: number
  labelLeft: number
  labelTop: number
  labelWidth?: number
  labelCentered?: boolean
}

export interface ArtistCard {
  id: string
  name: string
  description: string
  image: string
}

export const artistLocations: ArtistLocation[] = [
  {
    id: "shefi-cohort-14",
    name: "SheFi Cohort 14",
    width: 173,
    height: 166,
    left: -9,
    top: 338,
    labelLeft: 20,
    labelTop: 408,
    labelWidth: 113,
  },
  {
    id: "llsky",
    name: "LLSky",
    width: 196,
    height: 54,
    left: 164,
    top: 48,
    labelLeft: 240,
    labelTop: 67,
    labelWidth: 44,
  },
  {
    id: "canessa",
    name: "Canessa",
    width: 196,
    height: 74,
    left: 164,
    top: 182,
    labelLeft: 231,
    labelTop: 210,
    labelWidth: 63,
  },
  {
    id: "oartistanft",
    name: "oArtistaNFT",
    width: 196,
    height: 81,
    left: 319,
    top: 397,
    labelLeft: 374,
    labelTop: 426,
    labelWidth: 87,
  },
  {
    id: "ai-fusion-building",
    name: "",
    width: 73,
    height: 207,
    left: 378,
    top: 48,
    labelLeft: 0,
    labelTop: 0,
  },
  {
    id: "ai-fusion-main",
    name: "Ai Fusion",
    width: 316,
    height: 52,
    left: 424,
    top: 48,
    labelLeft: 580,
    labelTop: 76,
    labelWidth: 66,
  },
  {
    id: "farcaster-1",
    name: "",
    width: 146,
    height: 84,
    left: 574,
    top: 442,
    labelLeft: 0,
    labelTop: 0,
  },
  {
    id: "farcaster-2",
    name: "Farcaster  by AwedJob",
    width: 130,
    height: 83,
    left: 682,
    top: 462,
    labelLeft: 638,
    labelTop: 470,
    labelWidth: 118,
    labelCentered: true,
  },
  {
    id: "building-1",
    name: "",
    width: 207,
    height: 182,
    left: 533,
    top: 0,
    labelLeft: 0,
    labelTop: 0,
  },
  {
    id: "building-2",
    name: "",
    width: 207,
    height: 115,
    left: 533,
    top: 97,
    labelLeft: 0,
    labelTop: 0,
  },
  {
    id: "building-3",
    name: "",
    width: 136,
    height: 53,
    left: 676,
    top: 159,
    labelLeft: 0,
    labelTop: 0,
  },
]

export const artistCards: ArtistCard[] = [
  {
    id: "shefi-cohort-14",
    name: "SheFi Cohort 14",
    description: "Spark",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
  },
  {
    id: "llsky",
    name: "LLSky",
    description: "Green Dreams",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
  },
  {
    id: "canessa",
    name: "Canessa",
    description: "Create/Destroy",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
  },
  {
    id: "ai-fusion",
    name: "Ai Fusion",
    description: "AI Fusion Collective Exhibition",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
  },
  {
    id: "oartistanft",
    name: "oArtistaNFT",
    description: "Pixels & Beyond",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
  },
  {
    id: "farcaster",
    name: "Farcaster by AwedJob",
    description: "Farcaster Featured Artists",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ce5872e785416e29e173cd9cfae233ca3b6f8a73?width=353",
  },
]
