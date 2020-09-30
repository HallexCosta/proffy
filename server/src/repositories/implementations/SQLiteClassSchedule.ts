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

  async findByWeekDay(week_day: number): Promise<ClassSchedule[]> {
    const classSchedule = this.db('class_schedule')
      .select('*')
      .where('week_day', '=', week_day)

    return classSchedule
  }

  async findByFrom(from: number): Promise<ClassSchedule[]> {
    const classSchedule = this.db('class_schedule')
      .select('*')
      .where('from', '=', from)

    return classSchedule
  }
  
  async findByTo(to: number): Promise<ClassSchedule[]> {
    const classSchedule = this.db('class_schedule')
      .select('*')
      .where('to', '=', to)

    return classSchedule
  }

  async save(classSchedule: ClassSchedule): Promise<void> {
    await this.db('class_schedule')
      .insert(classSchedule)
  }
}