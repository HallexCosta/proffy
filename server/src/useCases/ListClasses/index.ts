import { SQLiteClasseRepository } from '../../repositories/implementations/SQLiteClasseRepository';
import { SQLiteClassSchedule } from '../../repositories/implementations/SQLiteClassSchedule'
import { SQLiteProffyRepository } from '../../repositories/implementations/SQLiteProffyRepository'

import { ListClassesUseCase } from './ListClassesUseCase'
import { ListClassesController } from "./ListClassesController";

const sqliteClasseRepository = new SQLiteClasseRepository
const sqliteClassScheduleRepository = new SQLiteClassSchedule
const sqliteProffyRepository = new SQLiteProffyRepository

const listClassesUseCase = new ListClassesUseCase(
  sqliteClasseRepository,
  sqliteClassScheduleRepository,
  sqliteProffyRepository
)

const listClassesController = new ListClassesController(
  listClassesUseCase
)

export { listClassesUseCase, listClassesController }

