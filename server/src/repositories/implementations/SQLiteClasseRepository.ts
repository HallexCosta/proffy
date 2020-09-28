import Knex from 'knex'

import { IClassesRepository } from '../IClassesRepository'
import { Classe } from '../../entities/Classe'

export class SQLiteClasseRepository implements IClassesRepository {
  constructor(
    private db: Knex | Knex.Transaction
  ) {}

  async setDb(transaction: Knex.Transaction) {
    this.db = transaction
  }

  async save(classe: Classe): Promise<void> {
    await this.db('classes')
      .insert(classe)
  }
}