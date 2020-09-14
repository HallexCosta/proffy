import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      lastname,
      email,
      password
    }: ICreateUserRequestDTO = request.body

    try {
      await this.createUserUseCase.execute({
        name,
        lastname,
        email,
        password
      })      

      return response.status(201).send()
    } catch (e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error.'
      })
    }
  }
}