import { Recovery } from '../../entities/Recovery'
import { IRecoveriesRepository } from '../IRecoveriesRepository'

import db from '../../database/connection'

export class SQLiteRecoveryRepository implements IRecoveriesRepository {
  async findByUserEmail(email: string): Promise<Recovery> {
    const recovery = await db('recoveries')
      .select('*')
      .where('user_email', '=', email)
      .first()
    
    return recovery
  }

  async findByKey(key: string): Promise<Recovery> {
    const recovery = await db('recoveries')
      .select('*')
      .where('key', '=', key)
      .first()

    return recovery
  }

  async save(recovery: Recovery): Promise<void> {    
    await db('recoveries')
      .insert(recovery)
  }

  async update(recovery: Recovery): Promise<void> {
    console.log(recovery)

    await db('recoveries')
      .update(recovery)
      .where('user_email', '=', recovery.user_email)
  }
}