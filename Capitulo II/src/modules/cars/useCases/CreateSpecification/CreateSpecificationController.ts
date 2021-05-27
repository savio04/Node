import CreateSpecificationUseCase from "./CreateSpecificationUseCase"
import { Request,Response } from 'express'

class CreateSpecificationController{
    private CreateSpecificationUseCase:CreateSpecificationUseCase
    
    constructor(CreateSpecificationUseCase:CreateSpecificationUseCase){
        this.CreateSpecificationUseCase = CreateSpecificationUseCase
    }

    async handle(request:Request,response:Response){
        const {name,description} = request.body

        try{
            const spacification = await this.CreateSpecificationUseCase.execute({
                name,
                description
            })

            return response.status(201).json(spacification)
        }catch(err){
            return response.status(400).json({
                erro: `${err.message}`
            })
        }
    }
}


export default CreateSpecificationController