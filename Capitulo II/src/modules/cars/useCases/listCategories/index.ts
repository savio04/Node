import CategoryRepository from '../../Repositories/Implementations/CategoryRepositpry'
import ListCategoryController from './ListCategoriesController'
import ListCategoryUseCase from './ListcategoryUseCase'

export default () => {
    const categoryRepository = new CategoryRepository

    const listCategoryUsecase = new ListCategoryUseCase(categoryRepository)

    const listCategoryController = new ListCategoryController(listCategoryUsecase)

    return listCategoryController
}