import { TValidateRecoveryRequestDTO } from './ValidateRecoveryDTO'
import { IRecoveriesRepository } from '../../repositories/IRecoveriesRepository'

export class ValidateRecoveryUseCase {
  constructor(
    private recoveriesRepository: IRecoveriesRepository
  ) {}

  async execute(data: TValidateRecoveryRequestDTO): Promise<boolean> {
    const recovery = await this.recoveriesRepository.findByKey(data.key)
    
    const currentDate = new Date()
    const expire = new Date(recovery.expire)

    if (!recovery.key || currentDate > expire) {
      return false
    }

    return true
  }
}