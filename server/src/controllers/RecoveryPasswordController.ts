import { Request, Response } from 'express'
import crypto from 'crypto'
import { mailtrapMailProvider } from '../services/mailer'

import db from '../database/connection'

export default class RecoveryPasswordController {
  constructor() {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body      

    try {
      const user = await db('accounts')
        .select('*')
        .where('email', '=', email)
        .first()
      
      if (!user) {
        return response.status(400).send({ error: 'User not found' })
      }

      const token = crypto.randomBytes(20).toString('hex')

      const now = new Date()
      now.setHours(now.getHours() + 1)


      return response.status(200).send()
    } catch(e) {
      return response.status(400).json({
        message: e.message || 'Error on forgot password, try again.'
      })
    }
  }
} 