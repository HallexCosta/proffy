import { User } from '../entities/User'

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  update(user: User): Promise<void>
  save(user: User): Promise<void>
}