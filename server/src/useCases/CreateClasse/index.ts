import { SQLiteClasseRepository } from '../../repositories/implementations/SQLiteClasseRepository'
import { SQLiteProffyRepository } from '../../repositories/implementations/SQLiteProffyRepository'
import { SQLiteClassSchedule } from '../../repositories/implementations/SQLiteClassSchedule'
import { CreateClasseUseCase } from './CreateClasseUseCase'
import { CreateClasseController } from './CreateClasseController'

import db from '../../database/connection'

const sqliteClasseRepository = new SQLiteClasseRepository(db)
const sqliteProffyRepository = new SQLiteProffyRepository(db)
const sqliteClassSchedule = new SQLiteClassSchedule(db)

const createClasseUseCase = new CreateClasseUseCase(
  sqliteProffyRepository,
  sqliteClasseRepository,
  sqliteClassSchedule
)

const createClasseController = new CreateClasseController(
  createClasseUseCase
)
  
export { createClasseUseCase, createClasseController }