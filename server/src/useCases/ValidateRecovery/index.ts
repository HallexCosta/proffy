import { SQLiteRecoveryRepository } from '../../repositories/implementations/SQLiteRecoveryRepository'

import { ValidateRecoveryUseCase } from './ValidateRecoveryUseCase'
import { ValidateRecoveryController } from './ValidateRecoveryController'

const sqliteRecoveryRepository = new SQLiteRecoveryRepository

const validateRecoveryUseCase = new ValidateRecoveryUseCase(
  sqliteRecoveryRepository
)

const validateRecoveryController = new ValidateRecoveryController(
  validateRecoveryUseCase
)

export { validateRecoveryUseCase, validateRecoveryController }