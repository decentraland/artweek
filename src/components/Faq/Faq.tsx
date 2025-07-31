import { memo, useState } from "react"
import arrowDown from "../../img/icons/arrow-down2.png"
import {
  AnswerFaq,
  ArrowFaq,
  DivVerticalLineFaq,
  FaqContainerLeft,
  FaqContainerRight,
  QuestionFaq,
  QuestionFaqContainer,
  SectionFaqContainer,
  TitleFaq,
} from "./Faq.styled"

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const questions = [
    {
      question: "What is Decentraland?",
      answer: () => (
        <p>
          Decentraland is a social virtual world where you can connect, explore,
          and create.
        </p>
      ),
    },
    {
      question: "What is Decentraland Career Quest?",
      answer: () => (
        <p>
          A free, two-day event inside Decentraland where you can learn about
          Web3 careers, meet hiring partners, and sharpen your skills.
        </p>
      ),
    },
    {
      question: "How do I access Decentraland Career Quest?",
      answer: () => (
        <p>
          Decentraland Career Quest happens inside Decentraland. Download the{" "}
          <a
            href="https://decentraland.org/download?utm_org=dcl&utm_source=landing&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desktop Client
          </a>{" "}
          to get started. When Career Quest is live, just click the jump-in link
          on this page or head to the Career Quest Garden at coordinates 6,88.
          In the meantime, feel free to explore Genesis Plaza with your avatar!
        </p>
      ),
    },
    {
      question: "Do I need experience in Web3 to join?",
      answer: () => (
        <p>
          No. Whether you&apos;re new to Web3 or looking to grow, Career Quest
          has something for everyone.
        </p>
      ),
    },
    {
      question:
        "Do I need cryptocurrency or a digital wallet to use Decentraland?",
      answer: () => (
        <p>
          You don&apos;t need cryptocurrency to enjoy Decentraland—it&apos;s
          free to explore. If you want to buy a community-made creation from the{" "}
          <a
            href="https://decentraland.org/marketplace/?utm_org=dcl&utm_source=landing&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marketplace
          </a>
          , you can use a credit/debit card, bank transfer, or a variety of
          cryptocurrencies. <br />
          <br />
          As for a{" "}
          <a
            href="https://docs.decentraland.org/player/blockchain-integration/get-a-wallet/?utm_org=dcl&utm_source=landing&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            digital wallet
          </a>
          , if you already have one, great! If you don&apos;t already have one,
          when you sign up for Decentraland with your email or a social account,
          a digital wallet will be automatically created for you. It&apos;s part
          of your account and stores any assets you collect, like free Wearables
          you might claim in-world or a fun Emote you purchase in the
          Marketplace.
        </p>
      ),
    },
    {
      question: "How do I keep up to date with Decentraland Career Quest news?",
      answer: () => (
        <p>
          Follow{" "}
          <a
            href="https://x.com/decentraland"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Decentraland
          </a>{" "}
          on{" "}
          <a
            href="https://decentraland.beehiiv.com/subscribe?utm_org=dcl&utm_source=landing&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>{" "}
          and search Decentraland Career Quest for live updates. You can also
          find Decentraland on{" "}
          <a
            href="https://www.instagram.com/decentraland_foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          , or{" "}
          <a
            href="https://decentraland.beehiiv.com/subscribe?utm_org=dcl&utm_source=landing&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            subscribe
          </a>{" "}
          to Decentraland&apos;s weekly newsletter for all of the latest news.
        </p>
      ),
    },
    {
      question: "I want to create in Decentraland, where can I learn more?",
      answer: () => (
        <p>
          Anyone can become a Decentraland creator, all it takes is a little
          know-how and endless creative ideas! Everything you need to know to
          start your creative journey can be found on the{" "}
          <a
            href="https://decentraland.org/create/?utm_org=dcl&utm_source=landing&utm_medium=organic&utm_campaign=careerquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Decentraland Create
          </a>{" "}
          page.
        </p>
      ),
    },
  ]

  return (
    <SectionFaqContainer id="faq">
      <FaqContainerLeft>
        <TitleFaq>Frequently Asked Questions</TitleFaq>
        <DivVerticalLineFaq />
      </FaqContainerLeft>

      <FaqContainerRight>
        {questions.map((item, index) => (
          <QuestionFaqContainer key={index}>
            <QuestionFaq onClick={() => toggleAnswer(index)}>
              <p>{item.question}</p>
              <ArrowFaq
                src={arrowDown}
                alt="arrow"
                $isActive={activeIndex === index}
              />
            </QuestionFaq>
            <AnswerFaq $isActive={activeIndex === index}>
              {item.answer()}
            </AnswerFaq>
          </QuestionFaqContainer>
        ))}
      </FaqContainerRight>
    </SectionFaqContainer>
  )
}

memo(Faq)
export { Faq }
