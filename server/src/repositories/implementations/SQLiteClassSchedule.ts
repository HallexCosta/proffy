import Knex from 'knex'

import { IClassScheduleRepository } from '../IClassScheduleRepository'
import { ClassSchedule } from '../../entities/ClassSchedule'

import db from '../../database/connection'

export class SQLiteClassSchedule implements IClassScheduleRepository {
  private db: Knex | Knex.Transaction
  
  constructor() {
    this.db = db
  }

  async setTransaction(transaction: Knex.Transaction) {
    this.db = transaction
  }

  async all(): Promise<ClassSchedule[]> {
    const classSchedule = this.db('class_schedule')
      .select('*')

    return classSchedule
  }

  async save(classSchedule: ClassSchedule[]): Promise<void> {
    await this.db('class_schedule')
      .insert(classSchedule)
  }
}