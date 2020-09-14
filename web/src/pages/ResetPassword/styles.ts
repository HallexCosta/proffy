import styled from 'styled-components'

import { EmojiFlirt }  from '@styled-icons/entypo' 

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

export const ContainerResetPassword = styled.div`
  > article {
    margin: 0 16rem;
  }

  > article header {
    margin-top: 2.7rem;
    margin-bottom: 6rem;
  }

  > article form legend {
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 4.6rem;

    font-family: Poppins;

    color: var(--color-text-title);
  }

  > article form input {
    width: 100%;
  }

  > article form img {
    position: absolute;
    margin-top: 1.6rem;
    right: 10%;
    bottom: 25%;

    cursor: pointer;
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

export const EmojiFlirtIcon = styled(EmojiFlirt)`
  width: 2.4rem;
  height: 2.4rem;
  background-color: yellow;
  border-radius: 50%;

  color: gray;
`

export const ContainerProffyLogo = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${successBg}) var(--color-primary);
`

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
