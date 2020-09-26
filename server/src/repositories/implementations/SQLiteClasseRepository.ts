import { IClassesRepository } from '../IClassesRepository'
import { Classe } from '../../entities/Classe'

import db from '../../database/connection'

export class SQLiteClasseRepository implements IClassesRepository {
  async save(classe: Classe): Promise<void> {
    await db('classes')
    .insert(classe)
  }
}