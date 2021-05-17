import CategoryRepository from '../../Repositories/CategoryRepositpry'
import CreateCategoryController from './CreateCategoryController'
import CreateCategoryUseCase from './CreateCategoryUseCase'

const categoryRepository = CategoryRepository.getInstance()

const categoryUseCase = new CreateCategoryUseCase(categoryRepository)

const categoryController = new CreateCategoryController(categoryUseCase)

export default categoryController