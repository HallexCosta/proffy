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
  InputPasswordContainer,
  RememberResetContainer,
  RegisterInfo,
  Footer,
  PurpleHeartIcon,
  RegisterInfoMore
} from './styles'

import logo from '../../assets/images/logo.svg'
import heartIcon from '../../assets/images/icons/purple-heart.svg'
import showPasswordIcon from '../../assets/images/icons/show-password.svg'
import hidePasswordIcon from '../../assets/images/icons/hide-password.svg'

import CheckBox from '../../components/CheckBox'
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
  const [showPassword, setShowPassword] = useState(false)

  // UX
  const [isEmailActive, setEmailIsActive] = useState(false) 
  const [isPasswordActive, setPasswordIsActive] = useState(false) 

  const { signIn, remember, rememberAccount } = useAuth()

  function handleShowAndHidePassword() {
    setShowPassword(!showPassword)
  }

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

  function handleEmail(value: string) {
    setEmail(value)
    value.length > 0 ? setEmailIsActive(true) :  setEmailIsActive(false)
  }

  function handlePassword(value: string) {
    setPassword(value)
    value.length > 0 ? setPasswordIsActive(true) : setPasswordIsActive(false)
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
            <InputPasswordContainer>
              <Input
                label="Senha"
                name="password"
                type={showPassword ? 'text' : 'password'}
                actived={isPasswordActive ? true : false}
                onChange={e => handlePassword(e.target.value)}
                value={password}
              />
              <img 
                onClick={handleShowAndHidePassword}
                src={showPassword ? hidePasswordIcon : showPasswordIcon}
                alt="Show Password"
              />
            </InputPasswordContainer>
            
            <RememberResetContainer>
              <CheckBox onClick={handleRememberAccount} label="Lembrar-me" checked={remember} />
              <Link to="/">Esqueci minha senha</Link>
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

    // <Container>
    //   <SignInContainer>
    //     <ProffyContainer>
    //       <ProffyContent>
    //         <ProffyImage src={logo} />
    //         <ProffyDescription>Sua plataforma de estudos online</ProffyDescription>
    //       </ProffyContent>
    //     </ProffyContainer>
    //   </SignInContainer>
      
    //   <SignInContentContainer>
    //     <SignInForm onSubmit={(e) => handleSignIn(e)}>
    //       <Title>Fazer Login</Title>
    //       <Input
    //         type="text"
    //         onChange={e => setEmail(e.target.value)}
    //         placeholder="E-mail"
    //       />
    //       <Input
    //         type={showPassword ? 'text' : 'password'}
    //         onChange={e => setPassword(e.target.value)}
    //         placeholder="Senha"
    //       />
    //       <img 
    //         onClick={handleShowAndHidePassword}
    //         src={showPassword ? hidePasswordIcon : showPasswordIcon}
    //         alt="Show Password"
    //       />
          
    //       <InputContainer>
    //         <RememberContainer>
    //           <CheckBox onClick={handleRememberAccount} label="Lembrar-me" checked={remember} />
    //         </RememberContainer>

    //         <Link to="/">Esqueci minha senha</Link>
    //       </InputContainer>

    //       <SignInButton
    //         active={email && password ? true : false}
    //       >
    //         Entrar
    //       </SignInButton>
    //     </SignInForm>
        
    //     <RegisterInfoContainer>
    //       <RegisterInfo>
    //         Não tem conta?
    //         <Link to="/signup">Cadastre-se</Link>
    //       </RegisterInfo>
    //       <More>
    //         É de graça
    //         <PurpleHeartIcon src={heartIcon} />
    //       </More>
    //     </RegisterInfoContainer>
    //   </SignInContentContainer>
    // </Container>
  )
}

export default SignIn