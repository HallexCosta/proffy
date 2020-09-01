import styled from 'styled-components'

import successBg from '../../assets/images/success-background.svg'

// HD - Header
// PL - Proffy Logo
// SF - SignUp Form

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 80px;

  grid-template-areas:
    'HD PL'
    'SF PL';
`

export const Header = styled.div`
  grid-area: HD;
  display: flex;
  align-items: center;

  margin-left: 16rem;
`

export const SignUpContainer = styled.div`
  grid-area: SF;
`

export const SignUpContent = styled.article`
  margin-left: 160px;
  margin-right: 160px;

  > form {
    position: relative;
    margin: 0;
    padding: 0;
  }

  > form input {
    width: 100%;
    height: 5.6rem;
    border-radius: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }
  
  > form input + img {
    position: absolute;
    margin-top: 1.6rem;
    right: 10%;

    cursor: pointer;
  }

  > form button {
    margin-top: 4rem;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  line-height: 2.4rem;
  font: 1.6rem Poppins;

  &:first-child {
    margin-top: 5.3rem;
  }
`

export const Title = styled.legend`
  font-family: 'Archivo';
  font-size: 4.0rem;
  font-weight: 700;
  color: var(--color-text-title);
  margin-bottom: 4rem;
`

export const Description = styled.h2``

export const ProffyContainer = styled.div`
  grid-area: PL;
  background: url(${successBg}) var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProffyContent = styled.div`
  > h2 {
    max-width: 22.9rem;
    height: 5.6rem;
    color: var(--color-text-in-primary);
  }
`