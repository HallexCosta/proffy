import React, { createContext, useState, useEffect, useContext } from 'react'
import * as auth from '../services/auth'
 
import api from '../services/api'

import { SignInUserData, Response } from '../services/auth'

type User = {
  name: string
  email: string
  photo: string
}

interface AuthContextData {
  signed: boolean
  user: User | null
  loading: boolean
  signIn(user: SignInUserData): Promise<void>
  signOut(): void
  remember: Boolean
  rememberAccount(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('@ProffyAuth:user')
      const storagedToken = localStorage.getItem('@ProffyAuth:token')

      // await new Promise(resolve => setTimeout(resolve, 2000))

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`

        setUser(JSON.parse(storagedUser))
      }
      
      setLoading(false)
    }

    loadStorageData()
  }, [])

  function rememberAccount() {
    setRemember(!remember)
  }

  async function signIn(user: SignInUserData) {
    try {
      const response: Response  = await auth.signIn(user)

      setUser(response.user)

      api.defaults.headers.Authorization = `Bearer ${response.token}`

      if (remember) {
        localStorage.setItem('@ProffyAuth:user', JSON.stringify(response.user))
        localStorage.setItem('@ProffyAuth:token', response.token)
      } 
    } catch(e) {
      return alert('Email or password invalid!')
    }
         
  }

  function signOut() {
    localStorage.clear()

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={
        {
          signed: !!user,
          loading,
          user,
          signIn,
          signOut,
          remember,
          rememberAccount
        }
      }>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export default AuthContext