import React from 'react'

import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const { signed, loading } = useAuth()

  if (loading) {
    return <div />
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes