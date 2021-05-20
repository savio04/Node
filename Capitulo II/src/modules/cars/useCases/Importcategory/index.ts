import CategoryRepository from "../../Repositories/Implementations/CategoryRepositpry";
import ImportCategoryController from "./ImportCategoryController";
import ImportCategoryUseCase from "./ImportCatgoryUseCase";

const categoryRepository = CategoryRepository.getInstance()

const importcategoryUseCase = new ImportCategoryUseCase(categoryRepository)

const importCategoryController = new ImportCategoryController(importcategoryUseCase)

export default importCategoryController