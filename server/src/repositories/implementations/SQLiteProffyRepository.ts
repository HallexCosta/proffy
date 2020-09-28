import { Proffy } from '../../entities/Proffy'
import { IProffysRepository } from '../IProffysRepository'

import Knex from 'knex'

export class SQLiteProffyRepository implements IProffysRepository {
  constructor(
    private db: Knex | Knex.Transaction
  ) {}

  async setDb(transaction: Knex.Transaction) {
    this.db = transaction
  }

  async save(proffy: Proffy): Promise<void> {
    await this.db('proffys')
      .insert(proffy)
  }
}