import { IClassesRepository } from '../../repositories/IClassesRepository'
import { IClassScheduleRepository } from '../../repositories/IClassScheduleRepository'
import { IProffysRepository } from '../../repositories/IProffysRepository'

import { ListClassesRequestDTO } from './ListClassesDTO'

import { ClassSchedule } from '../../entities/ClassSchedule'
import { Proffy } from '../../entities/Proffy'

import convertHourToMinute from '../../utils/convertHourToMinute'
import { Classe } from '../../entities/Classe'
import db from "../../database/connection"

type ClassScheduleFilter = { 
  week_day: number
  time: number
}

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

export interface ProffyResponse {
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: number
}

export class ListClassesUseCase {
  constructor(
    private classesRepository: IClassesRepository,
    private classSchedule: IClassScheduleRepository,
    private proffysRepository: IProffysRepository
  ) {}

  private filterClassSchedule(classSchedules: ClassSchedule[], classes: Classe[], { week_day, time }): ClassSchedule[] {
    const classScheduleFilteredById = classSchedules.filter((classSchedule, index) => classSchedule.class_id === classes[index]?.id)                    
   
    const classScheduleFilteredByWeekDay = classScheduleFilteredById
      .filter(classSchedule => classSchedule.week_day === week_day)

    const classScheduleFilteredByFrom = classScheduleFilteredByWeekDay
      .filter(classSchedule => classSchedule.from <= time)

      console.log('Schedule From', classScheduleFilteredByFrom)
      
    const classScheduleFilteredByTo = classScheduleFilteredByFrom
      .filter(classSchedule => classSchedule.to > time)

    return classScheduleFilteredByTo
  }

  private filterProffysByProffyIdAndClassId(proffys: Proffy[], classes: Classe[], classSchedule: ClassSchedule[]) {
    return proffys.filter(
      (proffy: Proffy) => (classes.filter((classe: Classe, index: number) => classe.proffy_id === proffy.id && classSchedule[index]?.class_id === classe.id))
    )
  }

  private proffysResponse(proffysById: Proffy[], classes: Classe[], classSchedule: ClassSchedule[]): ProffyResponse[] {
    const proffysResponse = proffysById.map(({ name, avatar, bio, whatsapp }, index) => {
      const { subject, cost } = classes[index]

      return {
        name,
        avatar,
        bio,
        whatsapp,
        subject,
        cost
      }
    })

    return proffysResponse
  }

  async execute(data: ListClassesRequestDTO): Promise<ProffyResponse[]> {
    if (!data.week_day || !data.subject || !data.time) {
      throw new Error('Missing filter search classes.')
    }

    const time = convertHourToMinute(data.time)

    const classesAlreadyExists: Classe[] = await this.classesRepository.findBySubject(data.subject)

    if (classesAlreadyExists.length === 0) {
      throw new Error('Classes not found.')
    }
    
    const classSchedules: ClassSchedule[] = await this.classSchedule.all()
    
    const classScheduleFilters: ClassScheduleFilter = {
      week_day: data.week_day,
      time
    }
    const classScheduleAlreadyExists: ClassSchedule[] = this.filterClassSchedule(classSchedules, classesAlreadyExists, classScheduleFilters)
    
    if (classScheduleAlreadyExists.length === 0) {
      throw new Error('No class schedule found.')
    }

    const proffysList: Proffy[] = await this.proffysRepository.all()

    const proffysFilteredById: Proffy[] = this.filterProffysByProffyIdAndClassId(proffysList, classesAlreadyExists, classScheduleAlreadyExists)

    const proffys: ProffyResponse[] = this.proffysResponse(proffysFilteredById, classesAlreadyExists, classScheduleAlreadyExists)

    return proffys
  }
}