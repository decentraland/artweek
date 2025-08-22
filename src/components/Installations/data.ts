import demoImg from "../../../public/img/about/tree.png"

type Installation = {
  id: number
  name: string
  studio: string
  img: string
}

const artistsAndCurators = [
  "Sara Shakeel",
  "Johanna Jaskowska",
  "Amber Vittoria",
  "Clara Bacou",
  "Micah Alhadeff",
  "Sabato Visconti",
  "Luis Llácer",
  "Carla Knopp",
  "Emma Shapiro & Savannah",
  "Spirit Antonio Azzolino",
  "OgiWorlds",
  "Mafin & Lazaro",
  "Elisaveta Sivas",
  "Clara Ohde",
  "Iacob Visual",
  "PepeGawd",
  "Bosque Gracias Paradigmstories",
  "Agustin Di Luciano & Melina",
  "Ojogann Hayabusa",
  "REZON",
  "Cybermike",
  "Carlos Muñoz",
  "Chrono T",
]

export const installationsData: Installation[] = Array.from(
  { length: artistsAndCurators.length },
  (_, i) => ({
    id: i + 1,
    name: artistsAndCurators[i],
    studio: `Studio ${i + 1}`,
    img: demoImg,
  })
)
