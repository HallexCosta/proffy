import { Request, Response } from 'express'
import { ListClassesRequestDTO } from "./ListClassesDTO"

import { ListClassesUseCase, ProffyResponse } from './ListClassesUseCase'

export class ListClassesController {
  constructor(
    private listClassesUseCase: ListClassesUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const week_day = Number(request.query.week_day)
    const subject = request.query.subject as string
    const time = request.query.time as string
    
    const listClasses: ListClassesRequestDTO = {
      week_day,
      subject,
      time
    }

    try {
      const proffys: ProffyResponse[] = await this.listClassesUseCase.execute(listClasses)

      return response.status(200).json(proffys)
    } catch(e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error.'
      })
    }
  }
}