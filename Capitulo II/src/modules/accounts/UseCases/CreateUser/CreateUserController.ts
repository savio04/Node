import {Request,Response} from 'express'
import { container } from 'tsyringe'
import CreateUserUseCase from './CreateUserUseCase'

class CreateUserController{
    async handle(request:Request,response:Response){
        const {name,email,password,driver_license} = request.body
        const userController = container.resolve(CreateUserUseCase)
        try{
            await userController.execute({
                name,
                email,
                password,
                driver_license
            })

            return response.status(201).send()
        }catch(err){
            return response.status(500).json({
                err: `${err.message}`
            })
        }
    }
}

export default CreateUserController