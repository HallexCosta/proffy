import { Request, Response } from 'express'
import { CreateConnectionUseCase } from './CreateConnectionUseCase'

export class CreateConnectionController {
  constructor(
    private createConnectionUseCase: CreateConnectionUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const proffy_id = request.body.proffy_id as string

    try {
      await this.createConnectionUseCase.execute({
        proffy_id
      })

      return response.status(201).send()
    } catch(e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error'
      })
    }
  }
}