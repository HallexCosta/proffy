import { SQLiteUserRepository } from '../../repositories/implementations/SQLiteUserRepository'
import { CreateClasseUseCase } from './CreateClasseUseCase'
import { CreateClasseController } from './CreateClasseController'

const sqliteUserRepository = new SQLiteUserRepository

const createClasseUseCase = new CreateClasseUseCase(
  sqliteClasseRepository
)

const createClasseController = new CreateClasseController(
  createUserUseCase
)
  
export { createClasseUseCase, createClasseController }