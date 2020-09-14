import React, { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AxiosError } from 'axios'

import {
  Container,
  Header,
  SignUpContainer,
  SignUpContent,
  Input,
  Title,
  Description,
  ProffyContainer,
  ProffyContent
} from './styles'

import backIcon from '../../assets/images/icons/back.svg'
import showPasswordIcon from '../../assets/images/icons/show-password.svg'
import hidePasswordIcon from '../../assets/images/icons/hide-password.svg'
import logo from '../../assets/images/logo.svg'

import api from '../../services/api'

import SignUpButton from '../../components/Button'

const SignUp: React.FC = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  function handleShowAndHidePassword() {
    setShowPassword(!showPassword)
  }

  async function handleSignUp(e: FormEvent) {
    e.preventDefault() 

    try {
      await api.post('users', {
        name,
        lastname,
        email,
        password
      })

      history.push('/concluded-signup')
    } catch(error) {
      const axiosError = error as AxiosError  

      return alert(axiosError.response?.data.message)
    }    
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
            <Input
              type="text"
              id="name"
              placeholder="Nome"
              onChange={e => setName(e.target.value)}
            />
            <Input
              type="text"
              id="lastname"
              placeholder="Sobrenome"
              onChange={e => setLastName(e.target.value)}
            />
            <Input
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={e => setEmail(e.target.value)}
              />
          
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
            />
            <img 
              onClick={handleShowAndHidePassword}
              src={showPassword ? hidePasswordIcon : showPasswordIcon }
              alt="Show Password"
            />

            <SignUpButton
              active={name && lastname && email && password ? true : false}
            >
              Concluir cadastro
            </SignUpButton>
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