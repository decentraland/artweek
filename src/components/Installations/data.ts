import demoImg from "../../../public/img/about/tree.png"

export const installationsData = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: `Installation ${i + 1}`,
  image: demoImg,
}))
