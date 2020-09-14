import { SQLiteUserRepository } from '../../repositories/implementations/SQLiteUserRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

const sqliteUserRepository = new SQLiteUserRepository

const createUserUseCase = new CreateUserUseCase(
  sqliteUserRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)
  
export { createUserUseCase, createUserController }