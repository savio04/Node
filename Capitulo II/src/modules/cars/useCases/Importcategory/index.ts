import CategoryRepository from "../../Repositories/Implementations/CategoryRepositpry"
import ImportCategoryController from "./ImportCategoryController"
import ImportCategoryUseCase from "./ImportCatgoryUseCase"

export default () => {
    const categoryRepository = new CategoryRepository

    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)

    const importCategoryController = new ImportCategoryController(importCategoryUseCase)


    return importCategoryController
}