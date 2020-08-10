import React, { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Header,
  SignUpContainer,
  SignUpContent,
  ShowPasswordButton,
  Input,
  Title,
  Description,
  SignUpButton,
  ProffyContainer,
  ProffyContent
} from './styles'

import backIcon from '../../assets/images/icons/back.svg'
import showPasswordIcon from '../../assets/images/icons/show-password.svg'
import hidePasswordIcon from '../../assets/images/icons/hide-password.svg'
import logo from '../../assets/images/logo.svg'

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowAndHidePassword() {
    setShowPassword(!showPassword)
  }

  function handleSignUp(e: FormEvent) {
    e.preventDefault() 
    
    console.log('> SignUp')
  }

  return (
    <Container>
      <Header>
        <Link to="/"><img src={backIcon} alt="Voltar"/></Link>
      </Header>

      <SignUpContainer>
        <SignUpContent>
          <Title>Fazer Login</Title>
          <Description>Preencha os dados abaixo para começar.</Description>

          <form onSubmit={(e) => handleSignUp(e)}>
            <Input id="name" placeholder="Nome" />
            <Input id="lastname" placeholder="Sobrenome" />
            <Input id="email" placeholder="E-mail" />
          
            <Input type={showPassword ? 'text' : 'password'} id="password" placeholder="Password" />
            <ShowPasswordButton onClick={handleShowAndHidePassword}>
              <img src={showPassword ? hidePasswordIcon : showPasswordIcon } alt="Show Password"/>
            </ShowPasswordButton>

            <SignUpButton>Concluir cadastro</SignUpButton>
          </form>
        </SignUpContent>
      </SignUpContainer>

      <ProffyContainer>
        <ProffyContent>
            <img src={logo} alt="Logo" />
          <h2>Sua plataforma de estudos online</h2>
        </ProffyContent>
      </ProffyContainer>
    </Container>
  )
}

export default SignUp