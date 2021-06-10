import { Request,Response } from 'express'
import { container } from 'tsyringe'
import CreateSpecificationUseCase from "./CreateSpecificationUseCase"

class CreateSpecificationController{

    async handle(request:Request,response:Response){
        const {name,description} = request.body
        const SpecificationUseCase = container.resolve(CreateSpecificationUseCase)
        const spacification = await SpecificationUseCase.execute({
            name,
            description
        })

        return response.status(201).json(spacification)
    
    }
}


export default CreateSpecificationController