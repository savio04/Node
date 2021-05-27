import { Request,Response } from 'express'
import ImportCategoryUseCase from './ImportCatgoryUseCase'

class ImportCategoryController{
    private ImportCategoryUseCase:ImportCategoryUseCase
    constructor(ImportCategoryUseCase:ImportCategoryUseCase){
        this.ImportCategoryUseCase = ImportCategoryUseCase
    }

    async handle(request:Request,response:Response){
        const { file } = request
        
        await this.ImportCategoryUseCase.execute(file) 
        
        return response.status(200).send()
    
    }
}

export default ImportCategoryController