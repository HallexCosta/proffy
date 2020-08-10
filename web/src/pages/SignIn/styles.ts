import styled from 'styled-components'

import successBg from '../../assets/images/success-background.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  color: var(--color-text-in-primary);
`

export const SignInContainer = styled.div`
  display: flex;
  flex: 1;
  background: url(${successBg}) var(--color-primary);
`

export const ProffyContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProffyContent = styled.div``

export const ProffyImage = styled.img`
  height: 10rem;
`

export const ProffyDescription = styled.h2`
  max-width: 25rem;

  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
`

export const SignInContentContainer = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SignInForm = styled.form``

export const Title = styled.legend`
  font-family: 'Archivo';
  font-size: 4.0rem;
  font-weight: 700;
  color: var(--color-text-title);
  margin-bottom: 4rem;
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

  &::placeholder {
    color: var(--color-text-complement);
  }
  &::-webkit-input-placeholder {
    color: var(--color-text-complement);
  }
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.4rem;

  font-size: 1.4rem;
  line-height: 2.4rem;

  color: var(--color-text-complement);

  > div {
    margin: 1.6rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > a {
    cursor: pointer;
    text-decoration: none;
    color: var(--color-text-complement);
  }
  
  > a:hover {
    color: var(--color-text-complement);
  }
`

export const RememberContainer = styled.div``

export const RememberInput = styled.input`
  width: 2.4rem;
  height: 2.4rem;

  margin-right: 1.6rem;

  border: 0;
  outline: 0;

  &:checked {
    background: var(--color-secundary);
    color: var(--color-white);
  }
`

export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3.6rem;

  padding: 2.5rem 0;

  margin-top: 4rem;

  cursor: pointer;

  color: var(--color-text-complement);
  background: var(--color-button-disbabled);

  font-weight: 600;
  font: 1.6rem Archivo;
  line-height: 2.6rem;

  border-radius: .8rem;

  outline: 0;
  border: 0;
`

export const RegisterInfoContainer = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;

  margin-top: 12.8rem;
  color: var(--color-gray);
`

export const RegisterInfo = styled.section`
  display: flex;
  flex-direction: column;
  color: var(--color-text-base);
  
  > a {
    color: var(--color-primary);
  }

  > a:active {
    color: var(--color-primary);
  }
`

export const More = styled.div``

export const PurpleHeartIcon = styled.img`
  margin-left: 1.2rem;
`
