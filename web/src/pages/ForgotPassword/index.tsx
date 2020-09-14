import React, { useState, FormEvent } from 'react'

import { Link } from 'react-router-dom'

import {
  Grid,
  ContainerForgotPassword,
  ContainerProffyLogo,
  Intro
} from './styles'

import logo from '../../assets/images/logo.svg'
import backImg from '../../assets/images/icons/back.svg'

import Input from '../../components/InputNormal'

import RecoveryPassword from '../../components/Button'
import api from '../../services/api'

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isEmailActive, setIsEmailActive] = useState(false)

  function handleEmail(address: string): void {
    setEmail(address)
    address.length >= 5 ? setIsEmailActive(true) : setIsEmailActive(false)
  }

  async function handleNotifyUserForgotPassword(e: FormEvent): Promise<void> {
    e.preventDefault()

    await api.post('forgot_password', {
      email
    })

    alert('Notify User Forgot Password')
  }

  return (
    <Grid>
      <ContainerForgotPassword>
        <article>
          <header>
            <Link to="/">
              <img src={backImg} alt="Back to login"/>
            </Link>
          </header>
          <form onSubmit={e => handleNotifyUserForgotPassword(e)}>
            <legend>Eita, esqueceu sua senha?</legend>
            <p>Não esquenta, vamos dar um jeito nisso.</p>
              
            <Input
              label="E-mail"
              name="email"
              type="email"
              actived={isEmailActive ? true : false}
              onChange={e => handleEmail(e.target.value)}
              value={email}
            />

            <RecoveryPassword
              active={email.length >= 5 ? true : false}
            >
              Enviar
            </RecoveryPassword>
          </form>
        </article>
      </ContainerForgotPassword>

      <ContainerProffyLogo>
        <Intro>
          <img src={logo} alt="Proffy Logo" />
          <p>Sua plaforma de estudos online.</p>
        </Intro>
      </ContainerProffyLogo>
    </Grid>
  )
}

export default ForgotPassword