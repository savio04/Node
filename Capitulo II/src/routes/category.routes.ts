import { Router} from 'express'
import categoryController from '../modules/cars/useCases/CreateCategory'
import listCategoryController from '../modules/cars/useCases/listCategories'
import importCategoryController from '../modules/cars/useCases/Importcategory'
import multer from 'multer'
const categoriesRoutes = Router()

const upload = multer({
    dest: './temp'
})
categoriesRoutes.post("/", (request,response) => {
  return categoryController().handle(request,response)
})

categoriesRoutes.get("/",(request,response) => {
    return listCategoryController().handle(request,response)
})

categoriesRoutes.post('/import',upload.single('file'),(request,response) => {
    importCategoryController().handle(request,response)
})

export default categoriesRoutes
