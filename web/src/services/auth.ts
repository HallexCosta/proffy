import api from '../services/api'

export type SignInUserData = {
  email: string
  password: string
}

export type Response = {
  token: string
  user: {
    name: string,
    email: string,
    photo: string
  }
}

export async function signIn(user: SignInUserData): Promise<Response> {
  const response = await api.post('auth', user)

  return response.data 
}