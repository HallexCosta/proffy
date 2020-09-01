import api from '../services/api'

export interface SignInUserData {
  email: string
  password: string
}

export interface Response {
  token: string
  user: {
    name: string,
    email: string,
    photo: string
  }
}

export interface ResponseError {
  message: string
}

export async function signIn(user: SignInUserData): Promise<Response> {
  try {
    const response = await api.post('auth', user)

    return response.data 
  } catch(error) {
    return error
  }
}