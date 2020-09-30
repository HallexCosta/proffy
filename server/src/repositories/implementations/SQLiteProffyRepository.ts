import { Proffy } from '../../entities/Proffy'
import { IProffysRepository } from '../IProffysRepository'

import db from '../../database/connection'

import Knex from 'knex'

export class SQLiteProffyRepository implements IProffysRepository {
  private db: Knex | Knex.Transaction

  constructor() {
    this.db = db
  }

  async setTransaction(transaction: Knex.Transaction) {
    this.db = transaction
  }

  async findByIds(ids: string[]): Promise<Proffy[]> {
    const proffys: Proffy[] = await this.db('proffys')
      .select('*')
      .where(ids)

    console.log('All Proffys', proffys)

    return proffys
  }

  async save(proffy: Proffy): Promise<void> {
    await this.db('proffys')
      .insert(proffy)
  }
}