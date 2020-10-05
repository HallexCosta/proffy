import { SQLiteConnectionRepository } from '../../repositories/implementations/SQLiteConnectionRepository'
import { ListConnectionController } from './ListConnectionController'
import { ListConnectionUseCase } from './ListConnectionUseCase'

const sqliteConnectionRepository = new SQLiteConnectionRepository

const listConnectionUseCase = new ListConnectionUseCase(
  sqliteConnectionRepository
)

const listConnectionController = new ListConnectionController(
  listConnectionUseCase
)

export { listConnectionUseCase, listConnectionController }