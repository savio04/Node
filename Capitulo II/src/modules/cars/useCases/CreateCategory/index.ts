import CategoryRepository from '../../Repositories/Implementations/CategoryRepositpry'
import CreateCategoryController from './CreateCategoryController'
import CreateCategoryUseCase from './CreateCategoryUseCase'

export default () => {
    const categoryRepository = new CategoryRepository

    const categoryUseCase = new CreateCategoryUseCase(categoryRepository)

    const categoryController = new CreateCategoryController(categoryUseCase)

    return categoryController
}