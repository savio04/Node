import { Request,Response } from 'express'
import CreateCategoryUseCase from './CreateCategoryUseCase'
import { container } from 'tsyringe'

class CreateCategoryController{

    async handle(request:Request,response:Response){
        const {name,description}  = request.body
        const CategoryUseCase = container.resolve(CreateCategoryUseCase)
        
        await CategoryUseCase.execute({
            name,
            description
        })

        return response.status(201).send()
    
    }
}

export default CreateCategoryController