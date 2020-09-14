import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

import db from '../../database/connection'

export class SQLiteUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await db('users')
      .select('*')
      .where('email', '=', email)
      .first()

    return user
  }

  async update(user: User): Promise<void> {
    await db('users')
      .where({
        id: user.id,
        email: user.email
      })
      .update(user)
  }

  async save(user: User): Promise<void> {
    await db('users')
      .insert(user)
  }
}