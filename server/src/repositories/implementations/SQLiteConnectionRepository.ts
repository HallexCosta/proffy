import db from '../../database/connection'
import { Connection } from "../../entities/Connection"
import { IConnectionsRepository } from '../IConnectionsRepository'

export class SQLiteConnectionRepository implements IConnectionsRepository {
  async findTotal(): Promise<number> {
    const [totalConnections] = await db('connections').count('* as total')

    const total = totalConnections.total as number

    return total
  }

  async save(connection: Connection): Promise<void> {
    console.log(connection)
    await db('connections').insert({
      connection
    })
  }
}