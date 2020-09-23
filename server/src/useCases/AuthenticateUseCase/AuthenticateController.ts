import { Request, Response } from 'express'
import { TAuthenticateRequestDTO } from './AuthenticateDTO'
import { AuthenticateUseCase, AuthenticatedUser } from './AuthenticateUseCase'

export class AuthenticateController {
  constructor(
    private autheticateUseCase: AuthenticateUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: TAuthenticateRequestDTO = request.body

    try {
      const authenticatedUser: AuthenticatedUser = await this.autheticateUseCase.execute({
        email,
        password
      })

      return response.status(201).send(authenticatedUser)
    } catch (e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error.'
      })
    }
  }
}