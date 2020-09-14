import { Request, Response } from 'express'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'

export class ForgotPasswordController {
  constructor(
    private forgotPasswordUseCase: ForgotPasswordUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body      

    try {
      await this.forgotPasswordUseCase.execute({
        email
      })

      return response.status(200).send()
    } catch(e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error'
      })
    }
  }
} 