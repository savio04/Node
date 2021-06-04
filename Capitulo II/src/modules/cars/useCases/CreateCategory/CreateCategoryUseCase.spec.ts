import CategoryRepositoryInMemory from "../../Repositories/in-memory/CategoryRepositoryInMemory"
import CreateCategoryUseCase from "./CreateCategoryUseCase"

let createCategoryUseCase:CreateCategoryUseCase
let categoriesRepositoryInMemory:CategoryRepositoryInMemory

describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoryRepositoryInMemory
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
    })

    it("Should be able to create a new category", async () => {
        await createCategoryUseCase.execute({
            name: "name category test",
            description: "descriprion category test"
        })
    })
})