import { SQLiteRecoveryRepository } from '../../repositories/implementations/SQLiteRecoveryRepository'
import { SQLiteUserRepository } from '../../repositories/implementations/SQLiteUserRepository'
import { ResetPasswordUseCase } from './ResetPasswordUseCase'
import { ResetPasswordController } from './ResetPasswordController'

const sqliteRecoveryRepository = new SQLiteRecoveryRepository
const sqliteUserRepository = new SQLiteUserRepository

const resetPasswordUseCase = new ResetPasswordUseCase(
  sqliteRecoveryRepository,
  sqliteUserRepository
)

const resetPasswordController = new ResetPasswordController(
  resetPasswordUseCase
)

export { resetPasswordUseCase, resetPasswordController  }