import styled from 'styled-components'

import successBg from '../../assets/images/success-background.svg'

// PC - ProffyContainer
// LC - LoginContainer
// RI - RegisterInfo

export const Container = styled.div`
  display: grid;

  width: 100%;
  height: 100%;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100vh;

  grid-template-areas:
    'PC LC'
    'PC LC';
`

export const ProffyContainer = styled.div`
  grid-area: PC;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: url(${successBg}) var(--color-primary);

  > header p {
    max-width: 25rem;

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;

    margin-top: 0.8rem;

    color: var(--color-text-in-primary);
  }

  > header img {
    height: 10rem;
  }
`

export const LoginContainer = styled.div`
  grid-area: LC;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  > form button {
    margin-top: 4rem;
  }

  > form input {
    width: 100%;
  }

  > form img {
    position: absolute;
    margin-top: 1.6rem;
    right: 10%;
    bottom: 25%;

    cursor: pointer;
  }

  > form legend {
    font-family: 'Archivo';
    font-size: 4.0rem;
    font-weight: 700;
    color: var(--color-text-title);
    margin-bottom: 4rem;
  }
`

export const InputPasswordContainer = styled.div`
  position: relative;
`

export const RememberResetContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.4rem;

  > div {
    margin-right: 7.2rem;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 12.8rem;
`

export const RegisterInfo = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-right: 13.6rem;
`

export const RegisterInfoMore = styled.div``

export const PurpleHeartIcon = styled.img`
  margin-left: 0.8rem;
`

// export const Container = styled.div`
//   width: 100vw;
//   height: 100vh;

//   display: flex;

//   color: var(--color-text-in-primary);
// `

// export const SignInContainer = styled.div`
//   display: flex;
//   flex: 1;
//   background: url(${successBg}) var(--color-primary);
// `

// export const ProffyContainer = styled.main`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// export const ProffyContent = styled.div``

// export const ProffyImage = styled.img`
//   height: 10rem;
// `

// export const ProffyDescription = styled.h2`
//   max-width: 25rem;

//   font-weight: 500;
//   font-size: 2.4rem;
//   line-height: 4.6rem;
//   margin-top: 0.8rem;
// `

// export const SignInContentContainer = styled.article`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// export const SignInForm = styled.form``

// export const Title = styled.legend`
//   font-family: 'Archivo';
//   font-size: 4.0rem;
//   font-weight: 700;
//   color: var(--color-text-title);
//   margin-bottom: 4rem;
// `

// export const Input = styled.input`
//   width: 100%;
//   height: 5.6rem;

//   background: var(--color-input-background);
//   border: 1px solid var(--color-line-in-white);
//   border-radius: .8rem;

//   outline: 0;

//   padding: 0 1.6rem;
  
//   line-height: 2.4rem;
//   font: 1.6rem Poppins;

//   &::-webkit-input-placeholder,
//   &::placeholder {
//     color: var(--color-text-complement);
//   }

//   /* &:focus-within::after {
//     width: calc(100% - 3.2rem);
//     height: 2px;
//     content: '';
//     background: var(--color-primary-light);
//     position: absolute;
//     left: 1.6rem;
//     right: 1.6rem;
//     bottom: 0;
//   } */

//   & + img {
//     position: absolute;
//     margin-top: 1.6rem;
//     right: 10%;

//     cursor: pointer;
//   }
// `

// export const InputContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   margin-top: 2.4rem;

//   font-size: 1.4rem;
//   line-height: 2.4rem;

//   color: var(--color-text-complement);

//   > div {
//     margin: 1.6rem 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   > a {
//     cursor: pointer;
//     text-decoration: none;
//     color: var(--color-text-complement);
//   }
  
//   > a:hover {
//     color: var(--color-text-complement);
//   }
// `

// export const RememberContainer = styled.div``

// export const SignInButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   width: 100%;
//   height: 3.6rem;

//   padding: 2.5rem 0;

//   margin-top: 4rem;

//   cursor: pointer;

//   color: var(--color-text-complement);
//   background: var(--color-button-disbabled);

//   font-weight: 600;
//   font: 1.6rem Archivo;
//   line-height: 2.6rem;

//   border-radius: .8rem;

//   outline: 0;
//   border: 0;
// `

// export const RegisterInfoContainer = styled.div`
//   width: 65%;
//   display: flex;
//   justify-content: space-between;

//   margin-top: 12.8rem;
//   color: var(--color-gray);
// `

// export const RegisterInfo = styled.section`
//   display: flex;
//   flex-direction: column;
//   color: var(--color-text-base);
  
//   > a {
//     color: var(--color-primary);
//   }

//   > a:active {
//     color: var(--color-primary);
//   }
// `

// export const More = styled.div``

// export const PurpleHeartIcon = styled.img`
//   margin-left: 1.2rem;
// `
