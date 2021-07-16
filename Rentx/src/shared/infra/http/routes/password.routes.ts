import { Router } from 'express'
import ResetPasswordUserController from '../../../../modules/accounts/UseCases/resetPasswordUser/ResetPasswordUserController'
import SendForgotPasswordMailController from '../../../../modules/accounts/UseCases/sendForgotPasswordMail/SendForgotPasswordMailController'
const PasswordRoute = Router()

const sendForgortMailController = new SendForgotPasswordMailController
const resetPasswordUserController = new ResetPasswordUserController


PasswordRoute.post('/forgot', sendForgortMailController.handle)
PasswordRoute.post('/reset', resetPasswordUserController.handle)


export default PasswordRoute