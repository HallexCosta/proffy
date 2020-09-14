import { ICreateUserRequestDTO } from './CreateUserDTO'
import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

import bcrypt from 'bcrypt'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const password = await bcrypt.hash(data.password, 8)
    const photo = `https://ui-avatars.com/api/?name=${data.name}+${data.lastname}`
    
    const created_at = new Date()

    const user = new User({
      ...data,
      password,
      photo,
      created_at
    })

    await this.usersRepository.save(user)
  }
}