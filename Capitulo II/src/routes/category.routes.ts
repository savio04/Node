import { Router} from 'express'
import categoryController from '../modules/cars/useCases/CreateCategory'
import listCategoryController from '../modules/cars/useCases/listCategories'
const categoriesRoutes = Router()

categoriesRoutes.post("/", (request,response) => {
  return categoryController.handle(request,response)
})

categoriesRoutes.get("/",(request,response) => {
    return listCategoryController.handle(request,response)
})

export default categoriesRoutes
