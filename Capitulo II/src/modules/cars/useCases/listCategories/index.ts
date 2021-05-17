import CategoryRepository from '../../Repositories/CategoryRepositpry'
import ListCategoryController from './ListCategoriesController'
import ListCategoryUseCase from './ListcategoryUseCase'

const categoryRepository = CategoryRepository.getInstance()

const listCategoryUsecase = new ListCategoryUseCase(categoryRepository)

const listCategoryController = new ListCategoryController(listCategoryUsecase)

export default listCategoryController