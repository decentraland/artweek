import demoImg from '../../../public/img/about/tree.png';

type Installation = {
  id: number;
  name: string;
  studio: string;
  img: string;
};

export const installationsData: Installation[] = Array.from(
  { length: 25 },
  (_, i) => ({
    id: i + 1,
    name: `Installation ${i + 1}`,
    studio: `Studio ${i + 1}`,
    img: demoImg,
  }),
);
