import { Request, Response } from 'express'
import { ListConnectionUseCase } from './ListConnectionUseCase'

export class ListConnectionController {
  constructor(
    private listConnectionUseCase: ListConnectionUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const totalConnection = await this.listConnectionUseCase.execute({})

      return response.status(200).json({
        totalConnection
      })
    } catch(e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error'
      })
    }
  }
}