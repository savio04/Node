import { Router} from 'express'
import CreateCategoryController from '../../../../modules/cars/useCases/CreateCategory/CreateCategoryController'
import listCategoryController from '../../../../modules/cars/useCases/listCategories/ListCategoriesController'
import multer from 'multer'
import ImportCategoryController from '../../../../modules/cars/useCases/Importcategory/ImportCategoryController'
import ensureAutheticaded from '../middlewares/ensureAtheticated'
import ensureAdmin from '../middlewares/ensureAdmin'
const categoriesRoutes = Router()

const upload = multer({
    dest: './temp'
})

const createcategoryContoller = new CreateCategoryController
const listCategories = new listCategoryController
const importCategory = new ImportCategoryController

categoriesRoutes.post("/",ensureAutheticaded,ensureAdmin,createcategoryContoller.handle)

categoriesRoutes.get("/",listCategories.handle)

categoriesRoutes.post(
    '/import',
    ensureAutheticaded,
    ensureAdmin,
    upload.single('file'),
    importCategory.handle)

export default categoriesRoutes
