export class Recovery {
  public readonly key: string
  public readonly expire: Date

  public readonly user_email: string

  public readonly created_at?: string

  constructor(props: Recovery) {
    Object.assign(this, props)
  }
}