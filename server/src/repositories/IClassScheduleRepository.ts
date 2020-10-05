import Knex from 'knex'
import { ClassSchedule } from '../entities/ClassSchedule'

export interface IClassScheduleRepository {
  all(): Promise<ClassSchedule[]>
  save(classSchedule: ClassSchedule[]): Promise<void>
  setTransaction(transaction: Knex.Transaction): Promise<void>
}