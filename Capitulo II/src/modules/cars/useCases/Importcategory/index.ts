import CategoryRepository from "../../Repositories/Implementations/CategoryRepositpry"
import ImportCategoryController from "./ImportCategoryController"
import ImportCategoryUseCase from "./ImportCatgoryUseCase"

const categoryRepository = CategoryRepository.getInstance()

const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)

const importCategoryController = new ImportCategoryController(importCategoryUseCase)


export default importCategoryController