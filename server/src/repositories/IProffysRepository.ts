import { Proffy } from '../entities/Proffy'

export interface IProffysRepository {
  save(proffy: Proffy): Promise<void>
}