import { v4 as uuidv4 } from 'uuid'

export class ClassSchedule {
  public readonly id: string
  
  public readonly week_day: number
  public readonly from: number
  public readonly to: number

  public readonly class_id: string

  constructor(props: Omit<ClassSchedule, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuidv4()
    }
  }
}