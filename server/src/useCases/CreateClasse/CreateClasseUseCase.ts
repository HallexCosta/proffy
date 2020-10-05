import { IProffysRepository } from '../../repositories/IProffysRepository'
import { IClassesRepository } from '../../repositories/IClassesRepository'
import { IClassScheduleRepository } from '../../repositories/IClassScheduleRepository'
import { TProffyRequestDTO, TScheduleItem } from './CreateClasseDTO'

import convertHourToMinute from '../../utils/convertHourToMinute'
import { Proffy } from "../../entities/Proffy"
import { Classe } from "../../entities/Classe"

import db from '../../database/connection'
import { ClassSchedule } from "../../entities/ClassSchedule"

export class CreateClasseUseCase {
  constructor(
    private proffyRepository: IProffysRepository,
    private classeRepository: IClassesRepository,
    private classSchedule: IClassScheduleRepository
  ) {}

  async execute(data: TProffyRequestDTO): Promise<void> {
    const trx = await db.transaction()

    await this.proffyRepository.setTransaction(trx)
    await this.classeRepository.setTransaction(trx)
    await this.classSchedule.setTransaction(trx)

    try {
      const proffy: Proffy = new Proffy({
        name: data.name,
        avatar: data.avatar,
        whatsapp: data.whatsapp,
        bio: data.bio
      })
      
      await this.proffyRepository.save(proffy)

      const classe: Classe = new Classe({
        subject: data.subject,
        cost: data.cost,
        proffy_id: proffy.id
      })

      await this.classeRepository.save(classe)
      
      const classSchedules = data.schedule.map((scheduleItem: TScheduleItem)=> {
        const classSchedule = new ClassSchedule({
          class_id: classe.id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinute(scheduleItem.from),
          to: convertHourToMinute(scheduleItem.to)
        })
        return classSchedule
      })

      await this.classSchedule.save(classSchedules)

      await trx.commit()
    } catch (error) {
      console.log(error)
      await trx.rollback()
    }
  }
}