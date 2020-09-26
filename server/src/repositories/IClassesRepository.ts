import { Classe } from '../entities/Classe'

export interface IClassesRepository {
  save(classe: Classe): Promise<void>
}