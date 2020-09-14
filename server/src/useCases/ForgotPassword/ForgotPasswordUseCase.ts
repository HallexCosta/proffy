import { IRecoveriesRepository } from '../../repositories/IRecoveriesRepository'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IMailProvider } from '../../providers/IMailProvider'
import { IForgotPasswordRequestDTO } from './ForgotPasswordDTO'
import { User } from '../../entities/User'
import { Recovery } from '../../entities/Recovery'

import crypto from 'crypto'

export class ForgotPasswordUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private recoveriesRepository: IRecoveriesRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: IForgotPasswordRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)
    
    if (!userAlreadyExists) {
      throw new Error('User not found.')
    }

    const recoveryAlreadyExists: Recovery = await this.recoveriesRepository.findByUserEmail(data.email)

    const key = crypto.randomBytes(20).toString('hex')

    const expire = new Date()
    expire.setHours(expire.getHours() + 24)

    const user_email = data.email

    const recovery: Recovery = new Recovery({
      key,
      expire,
      user_email
    })

    console.log(recovery)

    if (!recoveryAlreadyExists) {
      this.recoveriesRepository.save(recovery)
    } else {
      const now = new Date()

      if (now < recoveryAlreadyExists.expire) {
        throw new Error('Recovery key no has expired. Try again in 24 hours')
      }

      this.recoveriesRepository.update(recovery)
    }

    const user = new User(userAlreadyExists, userAlreadyExists.id)

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email
      },
      from: {
        name: 'Proffy Team',
        email: 'support@proffy.com.br'
      },
      subject: 'Recovery your password',
      body: `<p>Hi ${user.name} ${user.lastname}<br>Click to <a href="http://172.28.17.212:3333/reset-password/${recovery.key}">here</a> from reset your password</p>`
    })
  }
}