import Knex from 'knex'

import { IClassesRepository } from '../IClassesRepository'
import { Classe } from '../../entities/Classe'

import db from '../../database/connection'

export class SQLiteClasseRepository implements IClassesRepository {
  private db: Knex | Knex.Transaction
  
  constructor() {
    this.db = db
  }

  async setDb(transaction: Knex.Transaction) {
    this.db = transaction
  }

  async findBySubject(subject: string): Promise<Classe[]> {
    const classes = await this.db('classes')
      .select('*')
      .where('subject', '=', subject)

    return classes
  }

  async save(classe: Classe): Promise<void> {
    await this.db('classes')
      .insert(classe)
  }
}