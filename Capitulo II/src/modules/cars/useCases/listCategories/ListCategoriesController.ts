import { Request,Response } from 'express'
import { container } from 'tsyringe'
import ListCategoryUseCase from './ListcategoryUseCase'

class ListCategoryController{

    async handle(request:Request, response:Response){
        const ListCategory = container.resolve(ListCategoryUseCase)
        const categories = await ListCategory.execute()

        return response.status(200).json(categories)
    }
}


export default ListCategoryController