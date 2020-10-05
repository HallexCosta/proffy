import { SQLiteConnectionRepository } from '../../repositories/implementations/SQLiteConnectionRepository'
import { CreateConnectionController } from './CreateConnectionController'
import { CreateConnectionUseCase } from './CreateConnectionUseCase'

const sqliteConnectionRepository = new SQLiteConnectionRepository

const createConnectionUseCase = new CreateConnectionUseCase(
  sqliteConnectionRepository
)

const createConnectionController = new CreateConnectionController(
  createConnectionUseCase
)

export { createConnectionUseCase, createConnectionController }