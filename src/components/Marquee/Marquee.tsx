import {
  MarqueeContainer,
  MarqueeContent,
  MarqueeItem,
  MarqueeWrapper,
} from './Marquee.styled';

/**
 * Interface for marquee item data
 */
interface MarqueeItem {
  id: number;
  text: string;
}

/**
 * Double infinite marquee component that displays scrolling text in opposite directions.
 * Creates a dynamic, continuous scrolling effect with hover pause.
 *
 * @returns {JSX.Element} The rendered marquee component
 */
const Marquee = ({ variant }: { variant: 'light' | 'glass' }) => {
  const items: MarqueeItem[] = [
    { id: 1, text: 'FREE ACCESS' },
    { id: 2, text: 'EXPLORE AS AVATARS' },
    { id: 3, text: 'LIVE ART TOURS' },
    { id: 4, text: 'INTRO WORKSHOPS' },
    { id: 5, text: 'NO HEADSET NEEDED' },
    { id: 6, text: 'LAUNCH YOUR FIRST VIRTUAL GALLERY' },
    { id: 7, text: 'FREE ACCESS' },
    { id: 8, text: 'EXPLORE AS AVATARS' },
    { id: 9, text: 'LIVE ART TOURS' },
    { id: 10, text: 'INTRO WORKSHOPS' },
    { id: 11, text: 'NO HEADSET NEEDED' },
    { id: 12, text: 'LAUNCH YOUR FIRST VIRTUAL GALLERY' },
    { id: 13, text: 'FREE ACCESS' },
    { id: 14, text: 'EXPLORE AS AVATARS' },
    { id: 15, text: 'LIVE ART TOURS' },
    { id: 16, text: 'INTRO WORKSHOPS' },
    { id: 17, text: 'NO HEADSET NEEDED' },
    { id: 18, text: 'LAUNCH YOUR FIRST VIRTUAL GALLERY' },
    { id: 19, text: 'FREE ACCESS' },
    { id: 20, text: 'EXPLORE AS AVATARS' },
    { id: 21, text: 'LIVE ART TOURS' },
    { id: 22, text: 'INTRO WORKSHOPS' },
    { id: 23, text: 'NO HEADSET NEEDED' },
    { id: 24, text: 'LAUNCH YOUR FIRST VIRTUAL GALLERY' },
  ];

  // Double the items to ensure smooth infinite scroll
  const doubledItems = [...items, ...items];

  return (
    <MarqueeContainer variant={variant}>
      <MarqueeWrapper>
        <MarqueeContent>
          {doubledItems.map((item, idx) => (
            <MarqueeItem variant={variant} key={`${item.id}-${idx}`}>
              {item.text}
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </MarqueeWrapper>
    </MarqueeContainer>
  );
};

export { Marquee };
