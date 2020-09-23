import { SQLiteUserRepository } from '../../repositories/implementations/SQLiteUserRepository'
import { AuthenticateUseCase } from './AuthenticateUseCase'
import { AuthenticateController } from './AuthenticateController'

const sqliteUserRepository = new SQLiteUserRepository

const authenticateUseCase = new AuthenticateUseCase(
  sqliteUserRepository
)

const authenticateController = new AuthenticateController(
  authenticateUseCase
)
  
export { authenticateUseCase, authenticateController }