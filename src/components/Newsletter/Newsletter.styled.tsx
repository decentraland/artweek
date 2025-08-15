import { styled } from "styled-components"
import { breakpoints, theme } from "../../utils/theme"

const NewsletterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px 20px;
  background-color: ${theme.black};

  @media (min-width: ${breakpoints.md}) {
    padding: 80px 80px;
  }

  @media (min-width: ${breakpoints.l}) {
    padding: 100px 100px;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 100px 150px;
  }

  @media (min-width: ${breakpoints.xxl}) {
    padding: 100px 200px;
  }
`

// const NewsletterCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 24px;
//   width: 100%;
//   max-width: 640px;
//   border-radius: 12px;
//   padding: 56px 80px;
//   border: 2px solid transparent;
//   background:
//     linear-gradient(${theme.darkGray}, ${theme.black}) padding-box,
//     linear-gradient(to bottom, rgba(252, 252, 252, 0.5), ${theme.charcoalGray})
//       border-box;
// `

// const NewsletterTitle = styled.h2`
//   font-size: 32px;
//   font-weight: 700;
//   color: ${theme.white};
//   text-align: center;

//   @media (min-width: ${breakpoints.md}) {
//     text-align: left;
//   }
// `

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 480px;
//   gap: 12px;

//   @media (min-width: ${breakpoints.s}) {
//     flex-direction: row;
//     gap: 0;
//   }
// `

// const NewsletterInput = styled.input`
//   flex: 1;
//   padding: 14px 24px;
//   font-size: 14px;
//   font-weight: 500;
//   border: none;
//   border-radius: 12px;
//   background-color: rgba(252, 252, 252, 0.1);
//   border: 1px solid rgba(252, 252, 252, 0.15);
//   color: ${theme.grayPearl};

//   @media (min-width: ${breakpoints.s}) {
//     border-radius: 12px 0 0 12px;
//     border-right: none;
//   }

//   &::placeholder {
//     color: ${theme.gray};
//   }

//   &:focus {
//     outline: none;
//   }
// `

// const SubscribeButton = styled.button`
//   padding: 14px 24px;
//   font-size: 14px;
//   text-transform: uppercase;
//   font-weight: 700;
//   border: none;
//   border-radius: 12px;
//   cursor: pointer;
//   background: linear-gradient(to bottom, ${theme.purple}, ${theme.orange});
//   color: ${theme.white};
//   transition: opacity 0.3s ease;

//   @media (min-width: ${breakpoints.s}) {
//     border-radius: 0 12px 12px 0;
//   }

//   &:hover {
//     opacity: 0.8;
//   }
// `

export { NewsletterContainer }
