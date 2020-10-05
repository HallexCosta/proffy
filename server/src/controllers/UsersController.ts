import { Request, Response } from 'express'
import { celebrate, Joi } from 'celebrate'
import bcrypt from 'bcrypt'

import db from '../database/connection'

interface RequestUser {
  name: string
  lastname: string
  email: string
  password: string
}

export default class UsersController {
  get validateAccount() {
    return celebrate({
      body: Joi.object().keys({
        name: Joi.string().required().min(4),
        lastname: Joi.string().required().min(4),
        email: Joi.string().required().min(7),
        password: Joi.string().required().min(6)
      })
    })
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      lastname,
      email,
      password
    }: RequestUser = request.body

    const cryptPassword = await bcrypt.hash(password, 8)
    
    const photo = `https://ui-avatars.com/api/?name=${name}+${lastname}`

    try {
      await db('users')
        .insert({
          name,
          lastname,
          email,
          password: cryptPassword,
          photo
        })
    
      return response.status(201).send()
    } catch(e) {
      return response.status(400).json({ 
        error: 'Email is already in use.'
      })
    }
  }
}