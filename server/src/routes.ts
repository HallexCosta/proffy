import { Router, Request, Response } from 'express'

import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'
import UsersController from './controllers/UsersController'
import AuthentificationController from './controllers/AuthentificationController'
import AuthMiddleware from './middlewares/auth'

import { createUserController } from './useCases/CreateUser'
import { forgotPasswordController } from './useCases/ForgotPassword'
import { validateRecoveryController } from './useCases/ValidateRecovery'
import { resetPasswordController } from './useCases/ResetPassword'

const routes: Router = Router()

const classesController = new ClassesController
const connectionsController = new ConnectionsController
const usersController = new UsersController
const authentificationController = new AuthentificationController
const authMiddleware = new AuthMiddleware

// routes.post('/users', usersController.validateAccount, usersController.create)
routes.post('/users', (request: Request, response: Response) => {
  return createUserController.handle(request, response)
})

routes.post('/forgot_password', (request: Request, response: Response) => {
  return forgotPasswordController.handle(request, response)
})

routes.post('/validate_recovery', (request: Request, response: Response) => {
  return validateRecoveryController.handle(request, response)
})

routes.post('/reset_password', (request: Request, response: Response) => {
  return resetPasswordController.handle(request, response)
})

routes.post('/auth', authentificationController.findUserByEmailAndPassword)
routes.use(authMiddleware.auth);

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes