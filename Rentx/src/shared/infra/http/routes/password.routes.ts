import { Router } from 'express'
import SendForgotPasswordMailController from '../../../../modules/accounts/UseCases/sendForgotPasswordMail/SendForgotPasswordMailController'
const PasswordRoute = Router()
const sendForgortMailController = new SendForgotPasswordMailController

PasswordRoute.post('/forgot', sendForgortMailController.handle)

export default PasswordRoute