import { Router } from 'express'
import AutheticateController from '../../../../modules/accounts/UseCases/AutheticateUser/AutheticateContoller'
import RefreshTokenController from '../../../../modules/accounts/UseCases/RefreshToken/RefreshTokenController'

const AutheticateRoute = Router()

const AuthContoller = new AutheticateController
const refreshTokenController = new RefreshTokenController

AutheticateRoute.post('/',AuthContoller.handle)

AutheticateRoute.post('/refresh-token', refreshTokenController.handle)

export default AutheticateRoute