import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import db from '../database/connection'

interface User {
  id: number
  name: string
  lastname: string
  password: string
  photo: string
}

interface RequestUser {
  email: string
  password: string
}

interface AuthUser {
  token: string
  user: {
    name: string
    email: string
    photo: string
  }
}

export default class AuthetificationController {
  async findUserByEmailAndPassword(request: Request, response: Response): Promise<Response> {
    const {
      email,
      password
    }: RequestUser = request.body
    
    const user: User = await db('users')
      .select('*')
      .where('email', '=', email)
      .first()

    if (!user) {
      return response
      .status(401)
      .send({
        message: 'Incorrect email.'
      })
    }

    const isCompatible: boolean = await bcrypt.compare(password, user.password)
     
    if (!isCompatible) {
      return response
        .status(401)
        .send({ 
          message: 'Incorret password.'
        })
    }

    const token: string = jwt.sign(
      { id: user.id },
      "secret",
      { expiresIn: 86400 }
    )

    const name: string = `${user.name} ${user.lastname}`
    const photo: string = user.photo

    const authUser: AuthUser = {
     token,
      user: {
        name,
        email,
        photo
      }
    }

    return response
      .status(202)
      .send(authUser)
  }
}