import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { TAuthenticateRequestDTO } from './AuthenticateDTO'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export interface AuthenticatedUser {
  token: string
  user: {
    name: string
    email: string
    photo: string
  }
}

export class AuthenticateUseCase {
  constructor(
    private userRepository: IUsersRepository
  ) {}

  async execute(data: TAuthenticateRequestDTO): Promise<AuthenticatedUser> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (!userAlreadyExists) {
      throw new Error('Incorrect email.')
    }

    const user: User = new User(userAlreadyExists, userAlreadyExists.id)

    const isCompatible: boolean = await bcrypt.compare(data.password, user.password)
     
    if (!isCompatible) {
      throw new Error('Incorrect password.')
    }

    const token: string = jwt.sign(
      { id: user.id },
      "secret",
      { expiresIn: 86400 }
    )

    const name: string = `${user.name} ${user.lastname}`
    const photo: string = user.photo

    const email: string = user.email

    const authenticatedUser: AuthenticatedUser = {
     token,
      user: {
        name,
        email,
        photo
      }
    }

    return authenticatedUser
  }
}