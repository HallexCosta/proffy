import Knex from 'knex'
import { Proffy } from '../entities/Proffy'

export interface IProffysRepository {
  save(proffy: Proffy): Promise<void>
  setDb(transaction: Knex.Transaction): Promise<void>
}