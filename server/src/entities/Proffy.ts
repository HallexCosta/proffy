import { v4 as uuidv4 } from 'uuid'

export class Proffy {
  public readonly id: string
  
  public readonly name: string
  public readonly avatar: string
  public readonly whatsapp: string
  public readonly bio: string

  constructor(props: Omit<Proffy, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
  }
}