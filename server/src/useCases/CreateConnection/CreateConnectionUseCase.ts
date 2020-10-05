import { TCreateConnectionRequestDTO } from './CreateConnectionDTO'
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository'
import { Connection } from '../../entities/Connection'

export class CreateConnectionUseCase {
  constructor(
    private connectionsRepository: IConnectionsRepository
  ) {}

  async execute(data: TCreateConnectionRequestDTO): Promise<void> {
    if (!data.proffy_id) {
      throw new Error('Field is not "proffy_id"')
    }

    const connection = new Connection({
      proffy_id: data.proffy_id,
      created_at: new Date()
    })

    await this.connectionsRepository.save(connection)
  }
}