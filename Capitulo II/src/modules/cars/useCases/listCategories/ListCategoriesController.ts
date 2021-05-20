import { Request,Response } from 'express'
import ListCategoryUseCase from './ListcategoryUseCase'

class ListCategoryController{
    private ListCategoryUseCase:ListCategoryUseCase
    
    constructor(ListCategoryUseCase:ListCategoryUseCase){
        this.ListCategoryUseCase = ListCategoryUseCase
    }

    handle(request:Request, response:Response){
        const categories = this.ListCategoryUseCase.execute()

        return response.status(200).json(categories)
    }
}


export default ListCategoryController