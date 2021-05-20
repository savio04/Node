import ImportCategoryController from "./ImportCategoryController";
import ImportCategoryUseCase from "./ImportCatgoryUseCase";

const importcategoryUseCase = new ImportCategoryUseCase

const importCategoryController = new ImportCategoryController(importcategoryUseCase)

export default importCategoryController