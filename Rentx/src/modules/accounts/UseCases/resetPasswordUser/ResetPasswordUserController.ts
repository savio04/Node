import { Request, Response } from "express";
import { container } from "tsyringe";
import ResetPasswordUserUseCase from "./ResetPasswordUserUseCase";

class ResetPasswordUserController{
    async handle(request:Request,response:Response){
        const { token } = request.query
        const { password } = request.body
        const resetPassword = container.resolve(ResetPasswordUserUseCase)

        await resetPassword.execute({
            token: token as string,
            password
        })

        return response.send()
    }
}

export default ResetPasswordUserController