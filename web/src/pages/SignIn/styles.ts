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