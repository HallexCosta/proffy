import { v4 as uuidv4 } from 'uuid'

export class User {
  public readonly id: string

  public readonly name: string
  public readonly lastname: string
  public readonly email: string
  public readonly password: string
  public readonly photo: string

  public readonly created_at: Date

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
  }
}