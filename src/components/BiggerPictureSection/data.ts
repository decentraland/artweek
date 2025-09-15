interface ArtistLocation {
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

interface ArtistCard {
  id: string
  description: string
  image: string
  jumpInLink: string
  link: string
  studio: string
  artistName: string
  title: string
}

const artistLocations: ArtistLocation[] = [
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
interface ArtistCard {
  id: string
  description: string
  image: string
  jumpInLink: string
  link: string
  studio: string
  artistName: string
  title: string
}

const artistCards: ArtistCard[] = [
  {
    id: "shefi-cohort-14",
    description:
      'Each of us carry a "Spark" inside of us. As we journey through life, our spark can dim or grow. This exhibit is a celebration of that light we share amongst ourselves, created by the members of the SheFi Cohort 14.',
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062646_Art-Week_Spark-Art_from_the_SheFi_Cohort_14.png",
    jumpInLink: "https://decentraland.org/jump/?position=-150%2C91",
    link: "https://x.com/canessaDCL",
    studio: "Canessa",
    artistName: "SheFi Cohort 14",
    title: "Spark: Art from the SheFi Cohort 14",
  },
  {
    id: "linda-loh",
    description:
      "A space of weird dreamy abstract form and slow moving grassy morning dew translated beyond recognition by Gaussian splats, image-to-text, text-to-3d and more.",
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062173_Art-Week_Green_Dreams_.jpg",
    jumpInLink: "https://decentraland.org/jump/?position=-145%2C96",
    link: "https://www.instagram.com/__lindaloh__",
    studio: "Linda Loh",
    artistName: "Linda Loh",
    title: "Green Dreams",
  },
  {
    id: "canessa",
    description:
      'The laws of physics demand that energy can never be destroyed, it can only be transferred from one form to another. "Create/Destroy" is a inquiry into both the joy of creation, and the violence of destruction. When you love something, you protect it. You live in fear of losing it. What does it take then, to destroy something you love? This exhibit is an exercise in letting go, and embracing the infinitely ephemeral.',
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062634_Art-Week_Create_Destroy.jpg",
    jumpInLink: "https://decentraland.org/jump/?position=-145%2C93",
    link: "https://x.com/canessaDCL",
    studio: "Canessa",
    artistName: "Canessa",
    title: "Create/Destroy",
  },
  {
    id: "ai-fusion",
    description:
      "Reverse the roles: Ai gives the prompt, humans create the art. This collaboration between 13 artists builds a bridge across ages and geographical boundaries. On their own, each piece is unique. But when placed with others, a deeper message can be conveyed.",
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062629_Art-Week_Fusion_-_Canessa_Dcl.jpg",
    jumpInLink: "https://decentraland.org/jump/?position=-143%2C93",
    link: "https://x.com/canessaDCL",
    studio: "Canessa",
    artistName: "Ai Fusion",
    title: "AI Fusion Collective Exhibition",
  },
  {
    id: "oartistanft",
    description:
      "A bold fusion of minimalist pixel art and digital manipulation, this collection explores color, form, and texture in a playful yet experimental style. Where simplicity meets subtle complexity.",
    image:
      "https://marketing-files.decentraland.org/uploads/1757407061912_Art-Week_C5_oartistanft.png",
    jumpInLink: "https://decentraland.org/jump/?position=-141%2C91",
    link: "https://x.com/oArtistaNFT",
    studio: "oArtistaNFT",
    artistName: "oArtistaNFT",
    title: "Pixels & Beyond",
  },
  {
    id: "farcaster-by-awedjob",
    description:
      "The Farcaster Gallery, curated by AwedJob, showcases artists from the Farcaster community within a striking 3D model of Manhattan's Washington Square arch. Spirals inspired by the Guggenheim lead to two galleries inside the arch's legs, while above, a rooftop nightclub hosts special events.",
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062671_Art-Week_Farcaster_Featured_Artists.jpg",
    jumpInLink: "https://decentraland.org/jump/?position=-134%2C91",
    link: "https://x.com/AwedJob",
    studio: "MeryShark",
    artistName: "Farcaster by AwedJob",
    title: "Farcaster Featured Artists",
  },
  {
    id: "julia-sky",
    description:
      "Infinity is a living cube in Decentraland; an immersive portal into memory, sound, and transformation. Born from moments of loss and creative rebirth, it has traveled through digital and physical worlds, evolving through collaboration, mythology, and music into a story of love, time, and healing.",
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062714_Art-Week_Infinity_-_julia_sky.jpeg",
    jumpInLink: "https://decentraland.org/jump/?position=-139%2C98",
    link: "Www.instagram.com/juliasky.art",
    studio: "Julia Sky",
    artistName: "Julia Sky",
    title: "Infinity",
  },
  {
    id: "roustan",
    description:
      '"Selections from my Collection" is a virtual display of collectible NFT art by 70 Tezos and Rodeo artists from the collection of Roustan, an award-winning LA artist.',
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062641_Art-Week_Roustan_Selections_from_My_Collection.jpg",
    jumpInLink: "https://decentraland.org/jump/?position=-111%2C141",
    link: "https://linktr.ee/rouverse",
    studio: "Roustan",
    artistName: "Roustan",
    title: "Selections from My Collection",
  },
  {
    id: "facemoons-gallery",
    description:
      "Facemoon Gallery is the place in the metaverse where art, digital fashion, and creativity meet. Discover NFT exhibitions, interactive events, and rooftop parties with DJs, while connecting with creative minds from around the world.",
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062616_Art-Week_facemoongallery_-_Cara_de_Luna__1_.jpg",
    jumpInLink: "https://decentraland.org/jump/?position=-71%2C116",
    link: "https://x.com/Facemoons",
    studio: "Meryshark",
    artistName: "Facemoons Gallery",
    title: "Grass to the Moon",
  },
  {
    id: "rage-club",
    description:
      "Discover RAGE Club, Decentraland's destination for techno, EDM and industrial music. Created by metaverse events producer, MultiNFT.",
    image:
      "https://marketing-files.decentraland.org/uploads/1757407062657_Art-Week_RAGE__Art___Industrial_Music_Rage_Club.jpg",
    jumpInLink: "https://decentraland.org/jump/?position=149%2C50",
    link: "https://x.com/multinft",
    studio: "MultiNFT",
    artistName: "RAGE Club",
    title: "RAGE! Art & Industrial Music",
  },
  {
    id: "audiohotlab",
    description:
      'AudioHotLab is the Decentraland venue open to everyone who wants share art and passion. Created by Silvio De Candia, an "electronic producer with fresh a pulsating beat, dark melodies and galloping groove" - Gain Records.',
    image:
      "https://marketing-files.decentraland.org/uploads/1757407061819_Art-Week_AudioHotLab_-_sdecandia_decandia.png",
    jumpInLink: "https://decentraland.org/jump/?position=-97%2C-95",
    link: "https://www.instagram.com/silviodecandia/",
    studio: "Silvio De Candia",
    artistName: "AudioHotLab",
    title: "AudioHotLab",
  },
]

export type { ArtistLocation, ArtistCard }

export { artistLocations, artistCards }
