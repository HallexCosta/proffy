import Knex from 'knex'

import { Classe } from '../entities/Classe'

export interface IClassesRepository {
  findBySubject(subject: string): Promise<Classe[]>
  save(classe: Classe): Promise<void>
  setTransaction(transaction: Knex.Transaction): Promise<void>
}