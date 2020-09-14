import { IResetPasswordRequestDTO } from './ResetPasswordDTO'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { User } from '../../entities/User'
import { Recovery } from '../../entities/Recovery'
import { IRecoveriesRepository } from '../../repositories/IRecoveriesRepository'

import bcrypt from 'bcrypt'

export class ResetPasswordUseCase {
  constructor(
    private recoveriesRepository: IRecoveriesRepository,
    private userRepository: IUsersRepository
  ) {}

  async execute(data: IResetPasswordRequestDTO): Promise<void> {
    const recoveryAlreadyExists: Recovery = await this.recoveriesRepository.findByKey(data.recovery_key)

    if (!recoveryAlreadyExists) {
      throw new Error('Recovery key invalid')
    }

    const recovery: Recovery = new Recovery(recoveryAlreadyExists)

    const currentDate = new Date()

    if (currentDate > recovery.expire) { 
      throw new Error('Recovery key has expires, generate a new one.')
    }

    const userAlreadyExists: User = await this.userRepository.findByEmail(recoveryAlreadyExists.user_email)

    const user: User = new User(userAlreadyExists, userAlreadyExists.id)
    
    const password: string = await bcrypt.hash(data.password, 8)

    const expire: Date = new Date(recovery.expire)
    expire.setHours(expire.getHours() - 1)

    await this.recoveriesRepository.update({
      ...recovery,
      expire
    })

    await this.userRepository.update({
      ...user,
      password
    })
  }
}