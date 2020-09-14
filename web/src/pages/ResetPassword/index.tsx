import React, { useState, useEffect, FormEvent } from 'react'

import { Link, useParams, useHistory } from 'react-router-dom'

import api from '../../services/api'

import {
  Grid,
  ContainerResetPassword,
  EmojiFlirtIcon,
  ContainerProffyLogo,
  Intro
} from './styles'

import logo from '../../assets/images/logo.svg'
import backImg from '../../assets/images/icons/back.svg'

import ResetPassword from '../../components/Button'
import InputPassword from '../../components/InputPassword'

interface Params {
  recovery_key: string
}

interface RetrievingRecoveryKey {
  valid: boolean
}

const ForgotPassword: React.FC = () => {
  const history = useHistory()

  const { recovery_key } = useParams<Params>()

  const [isValidRecoveryKey, setIsValidRecoveryKey] = useState(false)

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [isPasswordActive, setIsPasswordActive] = useState(false)
  const [isConfirmPasswordActive, setIsConfirmPasswordActive] = useState(false)

  useEffect(() => {
    async function validateRecovery() {
      const recoveryKey: RetrievingRecoveryKey = await handleVerifyRecoveryIsValid(recovery_key)
      
      setIsValidRecoveryKey(recoveryKey.valid)
    }

    validateRecovery()
  }, [recovery_key])

  async function handleVerifyRecoveryIsValid(recovery_key: string): Promise<RetrievingRecoveryKey> {
    api.defaults.headers = { 
      recovery_key
    }

    const response = await api.post('validate_recovery')
    
    console.log(response.data)
    return response.data
  }

  function handlePassword(password: string): void {
    setPassword(password)
    password.length >= 5 ? setIsPasswordActive(true) : setIsPasswordActive(false)
  }
  
  function handleConfirmPassword(confirmPassword: string): void {
    setConfirmPassword(confirmPassword)
    confirmPassword.length >= 5 ? setIsConfirmPasswordActive(true) : setIsConfirmPasswordActive(false)
  }

  async function handleRecoveryPassword(e: FormEvent): Promise<void> {
    e.preventDefault()

    api.defaults.headers = {
      recovery_key
    }

    await api.post('reset_password', {
      password
    })

    alert('Password Reseted ^^')

    history.push('/')
  }

  return !isValidRecoveryKey ? <div /> : (
    <Grid>
      <ContainerResetPassword>
        <article>
          <header>
            <Link to="/">
              <img src={backImg} alt="Back to login"/>
            </Link>
          </header>
          <form onSubmit={e => handleRecoveryPassword(e)}>
            <legend>Pronto, agora você pode trocar sua senha</legend>
            <p>Lembre-se, não passe sua senha para ninguém <EmojiFlirtIcon /></p>
              
            <InputPassword
              label="Senha"
              name="senha"
              actived={isPasswordActive ? true : false}
              onChange={e => handlePassword(e.target.value)}
              value={password}
            />
            <InputPassword
              label="Confirme sua Senha"
              name="confirm-password"
              actived={isConfirmPasswordActive ? true : false}
              onChange={e => handleConfirmPassword(e.target.value)}
              value={confirmPassword}
            />

            <ResetPassword
              active={
                confirmPassword.length >= 5
                && password === confirmPassword
              }
            >
              Enviar
            </ResetPassword>
          </form>
        </article>
      </ContainerResetPassword>

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