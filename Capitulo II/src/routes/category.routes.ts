import { Router} from 'express'
import CreateCategoryController from '../modules/cars/useCases/CreateCategory/CreateCategoryController'
import listCategoryController from '../modules/cars/useCases/listCategories/ListCategoriesController'
import multer from 'multer'
import ImportCategoryController from '../modules/cars/useCases/Importcategory/ImportCategoryController'
import ensureAutheticaded from '../middlewares/ensureAtheticated'
const categoriesRoutes = Router()

const upload = multer({
    dest: './temp'
})

const createcategoryContoller = new CreateCategoryController
categoriesRoutes.post("/", ensureAutheticaded,createcategoryContoller.handle)

const listCategories = new listCategoryController
categoriesRoutes.get("/",listCategories.handle)

const importCategory = new ImportCategoryController
categoriesRoutes.post('/import',upload.single('file'),importCategory.handle)

export default categoriesRoutes
