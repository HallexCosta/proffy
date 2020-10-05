import Knex from 'knex'
import { Proffy } from '../entities/Proffy'

export interface IProffysRepository {
  all(): Promise<Proffy[]>
  save(proffy: Proffy): Promise<void>
  setTransaction(transaction: Knex.Transaction): Promise<void>
}