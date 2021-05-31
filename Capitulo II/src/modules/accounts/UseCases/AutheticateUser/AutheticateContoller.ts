import { Request, Response } from "express"
import { container } from "tsyringe"
import AutheticateUserUseCase from "./AutheticateUserUseCase"


class AutheticateController{
    async handle(request:Request,response:Response){
        const AuthController = container.resolve(AutheticateUserUseCase)
        const { email,password } = request.body
        try{
            const data = await AuthController.execute({
                email,
                password
            })

            return response.status(200).json(data)
        }catch(err){
            return response.status(400).json({
                err:`${err.message}`
            })
        }
    }
}

export default AutheticateController