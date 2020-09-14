import { Request, Response } from 'express'
import { TValidateRecoveryRequestDTO } from './ValidateRecoveryDTO'
import { ValidateRecoveryUseCase } from './ValidateRecoveryUseCase'

export class ValidateRecoveryController {
  constructor(
    private validateRecoveryUseCase: ValidateRecoveryUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const key = request.headers.recovery_key as string
    
    const recovery: TValidateRecoveryRequestDTO = {
      key
    }

    try {
      const valid: boolean = await this.validateRecoveryUseCase.execute(recovery)
      
      return response.status(200).json({
        valid
      })
    } catch(e) {
      return response.status(400).json({
        error: e.message || 'Unexpected Error.'
      })
    }
  }
}