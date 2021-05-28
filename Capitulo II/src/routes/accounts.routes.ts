import { Router} from 'express'
import CreateUserController from '../modules/accounts/UseCases/CreateUser/CreateUserController'
const AccountRoute = Router()

const userController = new CreateUserController
AccountRoute.post('/',userController.handle)

export default AccountRoute