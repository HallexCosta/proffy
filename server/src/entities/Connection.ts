import { v4 as uuidv4 } from 'uuid'

export class Connection {
  public readonly id: string
  public readonly proffy_id: string
  public readonly created_at: Date

  constructor(props: Omit<Connection, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
  }
}