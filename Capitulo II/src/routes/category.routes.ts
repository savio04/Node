import { Router} from 'express'
import CategoryRepository from '../Repositories/CategoryRepositpry'
const categoriesRoutes = Router()
const Repository = new CategoryRepository

categoriesRoutes.post("/", (request,response) => {
    const {name,description}  = request.body

    const category = Repository.create({
        name,
        description,
        created_at: new Date()
    })

    return response.status(201).json(category)
})

categoriesRoutes.get("/",(request,response) => {
    const categories = Repository.seeAll()

    return response.json(categories)
})

export default categoriesRoutes
