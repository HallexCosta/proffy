import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  SignInContainer,
  ProffyContainer,
  ProffyContent,
  ProffyImage,
  ProffyDescription,
  SignInContentContainer,
  SignInForm,
  Input,
  Title,
  SignInButton,
  InputContainer,
  RememberContainer,
  RememberInput,
  RegisterInfoContainer,
  RegisterInfo,
  More,
  PurpleHeartIcon
} from './styles'

import logo from '../../assets/images/logo.svg'

import HeartIcon from '../../assets/images/icons/purple-heart.svg'

import { useAuth }  from '../../contexts/auth'

const SignIn: React.FC = () => {
  const { signed, user, signIn } = useAuth()

  console.log(signed)
  console.log(user)

  async function handleSignIn(e: FormEvent) {
    e.preventDefault()
    
    await signIn()
  }

  return (
    <Container>
      <SignInContainer>
        <ProffyContainer>
          <ProffyContent>
            <ProffyImage src={logo} />
            <ProffyDescription>Sua plataforma de estudos online</ProffyDescription>
          </ProffyContent>
        </ProffyContainer>
      </SignInContainer>
      
      <SignInContentContainer>
        <SignInForm onSubmit={(e) => handleSignIn(e)}>
          <Title>Fazer Login</Title>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Senha" />
          
          <InputContainer>
            <RememberContainer>
              <RememberInput type="checkbox" />
              Lembrar-me
            </RememberContainer>

            <Link to="/">Esqueci minha senha</Link>
          </InputContainer>

          <SignInButton>Entrar</SignInButton>
        </SignInForm>
        
        <RegisterInfoContainer>
          <RegisterInfo>
            Não tem conta?
            <Link to="/signup">Cadastre-se</Link>
          </RegisterInfo>
          <More>
            É de graça
            <PurpleHeartIcon src={HeartIcon} />
          </More>
        </RegisterInfoContainer>
      </SignInContentContainer>
    </Container>
  )
}

export default SignIn