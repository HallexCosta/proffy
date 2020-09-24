import { Request, Response } from 'express'
import { TProffyRequestDTO } from './CreateClasseDTO'
import { CreateClasseUseCase } from './CreateClasseUseCase'

export class CreateClasseController {
  constructor(
    private createClasseUseCase: CreateClasseUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    }: TProffyRequestDTO = request.body 

    try {
      this.createClasseUseCase.execute({
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
      })

      return response.status(200).send()
    } catch(e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error.'
      })
    }
  }
}