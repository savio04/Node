import { Router } from 'express'
import AutheticateController from '../../../../modules/accounts/UseCases/AutheticateUser/AutheticateContoller'

const AutheticateRoute = Router()

const AuthContoller = new AutheticateController
AutheticateRoute.post('/',AuthContoller.handle)

export default AutheticateRoute