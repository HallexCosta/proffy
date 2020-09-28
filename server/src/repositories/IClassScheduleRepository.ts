import Knex from 'knex'
import { ClassSchedule } from '../entities/ClassSchedule'

export interface IClassScheduleRepository {
  save(classSchedule: ClassSchedule): Promise<void>
  setDb(transaction: Knex.Transaction): Promise<void>
}