import styled from 'styled-components'

import successBg from '../../assets/images/success-background.svg'

// FP - ForgotPassword
// PL - ProffyLogo

export const Grid = styled.div`
  display: grid;

  width: 100vw;
  height: 100vh;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100%;

  grid-template-areas:
    'FP PL';
`

export const ContainerForgotPassword = styled.div`
  > article {
    margin: 0 16rem;
  }

  > article header {
    margin-top: 2.7rem;
    margin-bottom: 15rem;
  }

  > article form legend {
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 4.6rem;

    font-family: Poppins;

    color: var(--color-text-title);
  }

  > article form p {
    font-size: 1.6rem;
    line-height: 2.6rem;

    color: var(--color-text-base);

    margin-top: 1.6rem;
    margin-bottom: 4rem;
  }

  > article form button {
    margin-top: 2.4rem;
  }
`

export const ContainerProffyLogo = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${successBg}) var(--color-primary);
`

export const Input = styled.input``

export const Intro = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    max-width: 22rem;

    font-size: 2.4rem;
    line-height: 4.6rem;
    
    color: var(--color-text-in-primary);
  }
`
