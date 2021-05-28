import { Router} from 'express'
import CreateCategoryController from '../modules/cars/useCases/CreateCategory/CreateCategoryController'
import listCategoryController from '../modules/cars/useCases/listCategories'
import importCategoryController from '../modules/cars/useCases/Importcategory'
import multer from 'multer'
const categoriesRoutes = Router()

const upload = multer({
    dest: './temp'
})


const categoryContoller = new CreateCategoryController
categoriesRoutes.post("/", categoryContoller.handle)

categoriesRoutes.get("/",(request,response) => {
    return listCategoryController().handle(request,response)
})

categoriesRoutes.post('/import',upload.single('file'),(request,response) => {
    importCategoryController().handle(request,response)
})

export default categoriesRoutes
