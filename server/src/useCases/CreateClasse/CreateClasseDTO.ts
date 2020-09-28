export type TScheduleItem = {
  week_day: number
  from: string
  to: string
}

export type TProffyRequestDTO = {
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: number
  schedule: TScheduleItem[]
}