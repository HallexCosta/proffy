import { IClassScheduleRepository } from '../IClassScheduleRepository'
import { ClassSchedule } from '../../entities/ClassSchedule'

import db from '../../database/connection'

export class SQLiteClassSchedule implements IClassScheduleRepository {
  async save(classSchedule: ClassSchedule): Promise<void> {
    await db('class_schedule')
    .insert(classSchedule)
  }
}