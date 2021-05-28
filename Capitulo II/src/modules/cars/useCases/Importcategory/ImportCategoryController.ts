import { Request,Response } from 'express'
import ImportCategoryUseCase from './ImportCatgoryUseCase'
import { container } from 'tsyringe'

class ImportCategoryController{
    async handle(request:Request,response:Response){
        const { file } = request
        const CategoryUseCase = container.resolve(ImportCategoryUseCase)
        
        await CategoryUseCase.execute(file) 
        
        return response.status(200).send()
    
    }
}

export default ImportCategoryController