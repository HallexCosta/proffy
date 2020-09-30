import Knex from 'knex'
import { ClassSchedule } from '../entities/ClassSchedule'

export interface IClassScheduleRepository {
  findByWeekDay(week_day: number): Promise<ClassSchedule[]>
  findByFrom(time: number): Promise<ClassSchedule[]>
  findByTo(time: number): Promise<ClassSchedule[]>
  save(classSchedule: ClassSchedule): Promise<void>
  setDb(transaction: Knex.Transaction): Promise<void>
}