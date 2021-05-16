import { Router} from 'express'
import CreateCategoryService from '../modules/cars/services/CreateCategoryService'
import CategoryRepository from '../modules/cars/Repositories/CategoryRepositpry'
const categoriesRoutes = Router()

const Repository = new CategoryRepository

categoriesRoutes.post("/", (request,response) => {
    const {name,description}  = request.body
    const CreateCategory = new CreateCategoryService(Repository)

    try{
        const category = CreateCategory.execute({
            name,
            description
        })

        return response.status(201).json(category)
    }catch(err){
        return response.status(400).json(err.message)
    }

})

categoriesRoutes.get("/",(request,response) => {
    const categories = Repository.seeAll()

    return response.json(categories)
})

export default categoriesRoutes
