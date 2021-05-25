import { Request,Response } from 'express'
import CreateCategoryUseCase from './CreateCategoryUseCase'

class CreateCategoryController{

    private CategoryUseCase:CreateCategoryUseCase
    constructor(CategoryUseCase:CreateCategoryUseCase){
        this.CategoryUseCase = CategoryUseCase
    }

    async handle(request:Request,response:Response){
        const {name,description}  = request.body

        try{
            await this.CategoryUseCase.execute({
                name,
                description
            })

            return response.status(201).send()
        }catch(err){
            return response.status(400).json(err.message)
        }
    }
}

export default CreateCategoryController