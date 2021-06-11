import CarsRepositoryInMemory from "../../Repositories/in-memory/CarsRepositoryInMemory"
import CreateCarUseCase from "./CreateCarUseCase"

let createCarUseCase:CreateCarUseCase
let carsRepositoryInMemory:CarsRepositoryInMemory

describe("Create a car", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
    })

    it("Should be able to create a new car", async () => {
        await createCarUseCase.execute({
            name: 'teste',
            description: 'aqui description teste',
            brand: 'testando dnv',
            license_plate: '45545445',
            category_id: '45484854efe4f54efe',
            fine_amount: 123,
            daily_rate:8999
        })   
    })
})