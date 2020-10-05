import { Connection } from '../entities/Connection';

export interface IConnectionsRepository {
  findTotal(): Promise<number>
  save(connection: Connection): Promise<void>
}