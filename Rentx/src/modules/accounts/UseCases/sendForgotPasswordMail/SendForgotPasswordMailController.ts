import { Request, Response } from "express";
import { container } from "tsyringe";
import SendForgotPasswordMailUseCase from "./SendForgotPasswordMailUseCase";

class SendForgotPasswordMailController{
    async handle(request:Request,response:Response){
        const {email} = request.body
        const sendForgotEmailUseCase = container.resolve(SendForgotPasswordMailUseCase)

        await sendForgotEmailUseCase.execute(email)

        return response.status(200).send()
    }
}

export default SendForgotPasswordMailController