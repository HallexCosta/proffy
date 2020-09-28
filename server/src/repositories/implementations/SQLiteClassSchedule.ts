import Knex from 'knex'

import { IClassScheduleRepository } from '../IClassScheduleRepository'
import { ClassSchedule } from '../../entities/ClassSchedule'

export class SQLiteClassSchedule implements IClassScheduleRepository {
  constructor(
    private db: Knex | Knex.Transaction
  ) {}

  async setDb(transaction: Knex.Transaction) {
    this.db = transaction
  }

  async save(classSchedule: ClassSchedule): Promise<void> {
    await this.db('class_schedule')
      .insert(classSchedule)
  }
}