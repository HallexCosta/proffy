import { TListConnectionRequestDTO } from './ListConnectionDTO'
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository'

export class ListConnectionUseCase {
  constructor(
    private connectionsRepository: IConnectionsRepository
  ) {}

  async execute(data: TListConnectionRequestDTO): Promise<number> {
    const totalConnections = await this.connectionsRepository.findTotal()

    return totalConnections
  }
}