import { NewsletterContainer } from "./Newsletter.styled"

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <iframe
        src="https://subscribe-forms.beehiiv.com/a3c4e913-9f95-435e-b12f-d2f0271dd0ad?slim=true"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "100%",
          height: "320px",
          margin: 0,
          borderRadius: "0px",
          backgroundColor: "transparent",
          boxShadow: "0 0 #0000",
        }}
      />
    </NewsletterContainer>
  )
}

export { Newsletter }
