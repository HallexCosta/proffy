import React, { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

// import {
//   Container,
//   SignInContainer,
//   ProffyContainer,
//   ProffyContent,
//   ProffyImage,
//   ProffyDescription,
//   SignInContentContainer,
//   SignInForm,
//   Input,
//   Title,
//   InputContainer,
//   RememberContainer,
//   RegisterInfoContainer,
//   RegisterInfo,
//   More,
//   PurpleHeartIcon
// } from './styles'

import {
  Container,
  ProffyContainer,
  LoginContainer,
  RememberResetContainer,
  RegisterInfo,
  Footer,
  PurpleHeartIcon,
  RegisterInfoMore
} from './styles'

import logo from '../../assets/images/logo.svg'
import heartIcon from '../../assets/images/icons/purple-heart.svg'

import CheckBox from '../../components/CheckBox'
import InputPassword from '../../components/InputPassword'
import Input from '../../components/InputV2'
import SignInButton from '../../components/Button'

import { useAuth }  from '../../contexts/auth'

import { SignInUserData } from '../../services/auth'

export interface AuthUser {
  name: string
  email: string
}

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // UX
  const [isEmailActive, setEmailIsActive] = useState(false) 
  const [isPasswordActive, setPasswordIsActive] = useState(false) 

  const { signIn, remember, rememberAccount } = useAuth()

  function handleRememberAccount() {
    rememberAccount()
  }

  async function handleSignIn(e: FormEvent) {
    e.preventDefault()

    const user: SignInUserData = {
      email,
      password
    }
    
    await signIn(user)
  }

  function handleEmail(email: string) {
    setEmail(email)
    email.length > 0 ? setEmailIsActive(true) :  setEmailIsActive(false)
  }

  function handlePassword(password: string) {
    setPassword(password)
    password.length > 0 ? setPasswordIsActive(true) : setPasswordIsActive(false)
  }

  return (
      <Container>
        <ProffyContainer>
          <header>
            <img src={logo} alt="Proffy Logo" />
            <p>Sua plataforma de estudos online</p>
          </header>
        </ProffyContainer>
        
        <LoginContainer>
          <form onSubmit={handleSignIn}>
            <legend>Fazer login</legend>

            <Input
              label="E-mail"
              name="email"
              type="email"
              actived={isEmailActive ? true : false}
              onChange={e => handleEmail(e.target.value)}
              value={email}
            />
            <InputPassword
              label="Senha"
              name="senha"
              actived={isPasswordActive ? true : false}
              onChange={e => handlePassword(e.target.value)}
              value={password}
            />
            
            <RememberResetContainer>
              <CheckBox
                label="Lembrar-me"
                checked={remember}
                onClick={handleRememberAccount}
              />
              <Link to="/forgot-password">Esqueci minha senha</Link>
            </RememberResetContainer>

            <SignInButton
              active={email && password ? true : false}
            >
              Entrar
            </SignInButton>
          </form>

          <Footer>
            <RegisterInfo>
              Não tem conta?
              <Link to="/signup">Cadastre-se</Link>
            </RegisterInfo>
            <RegisterInfoMore>
              É de graça
              <PurpleHeartIcon src={heartIcon} />
            </RegisterInfoMore>
          </Footer>
        </LoginContainer>
      </Container>
  )
}

export default SignIn