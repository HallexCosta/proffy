import Knex from 'knex'
import { Proffy } from '../entities/Proffy'

export interface IProffysRepository {
  findByIds(ids: string[]): Promise<Proffy[]>
  save(proffy: Proffy): Promise<void>
  setDb(transaction: Knex.Transaction): Promise<void>
}