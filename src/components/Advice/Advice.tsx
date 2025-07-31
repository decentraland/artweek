import { useState } from "react"
import { adviceData } from "./data"
import { useResizePage } from "../../hooks/useResizePage"
import repeat from "../../img/icons/repeat.png"
import {
  DescriptionLiveTalksContainer,
  DivVerticalLine,
  IconItemLiveTalks,
  LiveTalksInfoContainer,
  ModalLiveTalksImage,
  SubtitleLiveTalks,
  TitleLiveTalks,
  TitleLiveTalksContainer,
} from "../../shared/common.styled"
import { Modal } from "../Modal"
import {
  AdviceContainer,
  AdviceContainerLeft,
  AdviceContainerRight,
  TalkCardAdvice,
} from "./Advice.styled"

const Advice = () => {
  const { isMobile } = useResizePage({ size: 1200 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState("")

  return (
    <>
      <AdviceContainer id="advice">
        {isMobile ? (
          <AdviceInfo />
        ) : (
          <AdviceContainerLeft>
            <AdviceInfo />

            <DivVerticalLine />
          </AdviceContainerLeft>
        )}

        <AdviceContainerRight>
          {adviceData.map((talk, index) => (
            <TalkCardAdvice key={index}>
              <img
                src={talk.image}
                alt={talk.title}
                onClick={() => {
                  setIsModalOpen(true)
                  setModalImageUrl(talk.image)
                }}
              />
              <div className="info-card">
                <h3>
                  {talk.title}
                  {talk.description && `: ${talk.description}`}
                </h3>
                <p style={{ marginTop: "30px" }}>{talk.date}</p>
                <div className="time-card">
                  <p>{talk["time-start"]}</p>
                  {talk["time-start-p"] && (
                    <>
                      <p>|</p>
                      <p>{talk["time-start-p"]}</p>
                    </>
                  )}
                </div>
                {talk["date2"] && talk["time-start2"] && (
                  <>
                    <p style={{ marginTop: "10px" }}>{talk["date2"]}</p>
                    <div className="time-card" style={{ marginBottom: "20px" }}>
                      <p>{talk["time-start2"]}</p>
                    </div>
                  </>
                )}
              </div>
            </TalkCardAdvice>
          ))}
        </AdviceContainerRight>
      </AdviceContainer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalLiveTalksImage src={modalImageUrl} alt="Modal Image" />
      </Modal>
    </>
  )
}

const AdviceInfo = () => {
  return (
    <LiveTalksInfoContainer>
      <TitleLiveTalksContainer>
        <TitleLiveTalks>Advice &</TitleLiveTalks>
        <TitleLiveTalks>Connection</TitleLiveTalks>
      </TitleLiveTalksContainer>

      <SubtitleLiveTalks>
        Gain advice at the Talk Zone (6,88) or connect with recruiters and
        educators in the Expo Zone (-8,74)
      </SubtitleLiveTalks>

      <DescriptionLiveTalksContainer>
        <IconItemLiveTalks>
          <img src={repeat} alt="repeat" />
        </IconItemLiveTalks>
      </DescriptionLiveTalksContainer>
    </LiveTalksInfoContainer>
  )
}

export { Advice }
