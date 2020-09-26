import { v4 as uuidv4 } from 'uuid'

export class Classe {
  public readonly id: string
  public readonly subject: string

  public readonly cost: number

  public readonly proffy_id: string

  constructor(props: Omit<Classe, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
  }
}