import express, { Router} from 'express'

import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'
import AccountsController from './controllers/AccountsController'
import AuthentificationController from './controllers/AuthentificationController'
import AuthMiddleware from './middlewares/auth'

const routes: Router = express.Router()

const classesController = new ClassesController
const connectionsController = new ConnectionsController
const accountsController = new AccountsController
const authentificationController = new AuthentificationController
const authMiddleware = new AuthMiddleware

routes.post('/users', accountsController.validateAccount, accountsController.create)

routes.post('/auth', authentificationController.findUserByEmailAndPassword)
routes.use(authMiddleware.auth);

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes