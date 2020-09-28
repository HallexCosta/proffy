import { Request, Response, NextFunction } from 'express'
import jwt, { SigningKeyCallback } from 'jsonwebtoken'
import { promisify } from 'util'

interface JWTDecoded {
  id: number
}

export default class Authentification {  
  async auth(request: Request, response: Response, next: NextFunction): Promise<void|Response<{}>> {
    const { authorization } = request.headers

    if (!authorization) {
      return response.status(401).send({ error: "No token provided" })
    } 

    try {
      const verify = await promisify(jwt.verify) as SigningKeyCallback
      await verify(authorization, "secret") ;

      return next();
    } catch (err) {
      return response.status(401).json({ message: "Token invalid" })
    }
  } 
}