import { Proffy } from '../../entities/Proffy'
import { IProffysRepository } from '../IProffysRepository'

import db from '../../database/connection'

export class SQLiteProffyRepository implements IProffysRepository {
  async save(proffy: Proffy): Promise<void> {
    await db('proffys')
      .insert(proffy)
  }
}