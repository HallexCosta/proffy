import { Request, Response } from 'express'
import { IResetPasswordRequestDTO } from './ResetPasswordDTO'
import { ResetPasswordUseCase } from './ResetPasswordUseCase'

export class ResetPasswordController {
  constructor(
    private resetPasswordUseCase: ResetPasswordUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { password } = request.body
    const recovery_key: string = request.headers.recovery_key as string

    const resetPasswordRequestDTO: IResetPasswordRequestDTO = {
      password,
      recovery_key
    }

    try {
      await this.resetPasswordUseCase.execute(resetPasswordRequestDTO)

      return response.status(200).send()
    } catch(e) {
      return response.status(400).json({
        error: e.message || 'Unexpected error.'
      })
    }
  }
}