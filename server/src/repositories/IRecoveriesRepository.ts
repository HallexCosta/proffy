import { Recovery } from '../entities/Recovery'

export interface IRecoveriesRepository {
  findByUserEmail(email: string): Promise<Recovery>
  findByKey(key: string): Promise<Recovery>
  save(recovery: Recovery): Promise<void>
  update(recovery: Recovery): Promise<void>
}