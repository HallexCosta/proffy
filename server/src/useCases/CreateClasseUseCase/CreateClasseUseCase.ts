import { IUsersRepository } from '../../repositories/IUsersRepository'
import { TProffyRequestDTO } from './CreateClasseDTO'

import db from '../../database/connection'

import convertHourToMinute from '../../utils/convertHourToMinute'

interface IScheduleItem {
  week_day: number
  from: string
  to: string
}

interface IProffy {
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: number
  schedule: IScheduleItem[]
}

export class CreateClasseUseCase {
  constructor(
    private userRepository: IUsersRepository
  ) {}

  async execute(data: TProffyRequestDTO): Promise<void> {
    const trx = await db.transaction()

    try {
      const insertedProffysIds = await trx('proffys').insert({
        name: data.name,
        avatar: data.avatar,
        whatsapp: data.whatsapp,
        bio: data.bio
      })

      const user_id = insertedProffysIds[0]

      const insertedClassesIds = await trx('classes').insert({
        subject: data.subject,
        cost: data.cost,
        user_id
      })

      const class_id = insertedClassesIds[0]
          
      const classSchedule = data.schedule.map((scheduleItem: IScheduleItem)=> {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinute(scheduleItem.from),
          to: convertHourToMinute(scheduleItem.to)
        }
      })

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

    } catch (error) {
      await trx.rollback()
    }
  }
}