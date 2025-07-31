import {
  MarqueeContainer,
  MarqueeContent,
  MarqueeItem,
  MarqueeWrapper,
} from "./Marquee.styled"

/**
 * Interface for marquee item data
 */
interface MarqueeItem {
  id: number
  text: string
}

/**
 * Double infinite marquee component that displays scrolling text in opposite directions.
 * Creates a dynamic, continuous scrolling effect with hover pause.
 *
 * @returns {JSX.Element} The rendered marquee component
 */
const Marquee = () => {
  const items: MarqueeItem[] = [
    { id: 1, text: "WEB3 CAREERS" },
    { id: 2, text: "EXPERT PANELS" },
    { id: 3, text: "SKILLS CHALLENGES" },
    { id: 4, text: "WORKSHOPS" },
    { id: 5, text: "TRAINING GIVEAWAYS" },
    { id: 6, text: "CAREER GUIDANCE" },
    { id: 8, text: "GAME ARENA" },
    { id: 9, text: "WIN A BOOTCAMP" },
    { id: 10, text: "HIRING PARTNERS" },
    { id: 11, text: "BUILD YOUR FUTURE" },
    { id: 12, text: "WEB3 CAREERS" },
    { id: 13, text: "EXPERT PANELS" },
    { id: 14, text: "SKILLS CHALLENGES" },
    { id: 15, text: "WORKSHOPS" },
    { id: 16, text: "TRAINING GIVEAWAYS" },
    { id: 17, text: "CAREER GUIDANCE" },
    { id: 18, text: "GAME ARENA" },
    { id: 19, text: "WIN A BOOTCAMP" },
    { id: 20, text: "HIRING PARTNERS" },
    { id: 21, text: "BUILD YOUR FUTURE" },
    { id: 22, text: "WEB3 CAREERS" },
    { id: 23, text: "EXPERT PANELS" },
    { id: 24, text: "SKILLS CHALLENGES" },
    { id: 25, text: "WORKSHOPS" },
    { id: 26, text: "TRAINING GIVEAWAYS" },
    { id: 27, text: "CAREER GUIDANCE" },
    { id: 28, text: "GAME ARENA" },
    { id: 29, text: "WIN A BOOTCAMP" },
    { id: 30, text: "HIRING PARTNERS" },
    { id: 31, text: "BUILD YOUR FUTURE" },
  ]

  // Double the items to ensure smooth infinite scroll
  const doubledItems = [...items, ...items]

  return (
    <MarqueeContainer>
      <MarqueeWrapper>
        <MarqueeContent>
          {doubledItems.map((item, idx) => (
            <MarqueeItem key={`${item.id}-${idx}`}>{item.text}</MarqueeItem>
          ))}
        </MarqueeContent>
      </MarqueeWrapper>
    </MarqueeContainer>
  )
}

export { Marquee }
