import { Request,Response } from 'express'
import { container } from 'tsyringe'
import CreateSpecificationUseCase from "./CreateSpecificationUseCase"

class CreateSpecificationController{

    async handle(request:Request,response:Response){
        const {name,description} = request.body
        const SpecificationUseCase = container.resolve(CreateSpecificationUseCase)

        try{
            const spacification = await SpecificationUseCase.execute({
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