import React, { createContext, useState, useEffect, useContext } from 'react'
import * as auth from '../services/auth'

import api from '../services/api'

interface User {
  name: string,
  email: string
}

interface AuthContextData {
  signed: boolean
  user: User | null,
  loading: boolean
  signIn(): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
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

  async function signIn() {
    const response = await auth.signIn()

    setUser(response.user)

    api.defaults.headers.Authorization = `Bearer ${response.token}`

    localStorage.setItem('@ProffyAuth:user', JSON.stringify(response.user))
    localStorage.setItem('@ProffyAuth:token', response.token)
  }

  function signOut() {
    localStorage.clear()

    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, loading, user: user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export default AuthContext