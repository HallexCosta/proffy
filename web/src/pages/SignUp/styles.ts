import styled from 'styled-components'

import successBg from '../../assets/images/success-background.svg'

// HD
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

  /* > form img {
    margin-top: 1.5rem;
    position: absolute;
    left: 34%;

    cursor: pointer;
  } */
`

export const InputBlock = styled.div`
`
export const ShowPasswordButton = styled.button`
  position: absolute;
  border: 0;

  left: 32rem;
  bottom: 10.5rem;
`

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;

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

export const SignUpButton = styled.button`
  width: 35.2rem;
  height: 5.6rem;

  margin-top: 4rem;

  color: var(--color-box-base);
  background: var(--color-secundary);

  border: 0;
  border-radius: .8rem;
`

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