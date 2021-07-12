import AppError from "../../../../shared/errors/AppError"
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
        const car = await createCarUseCase.execute({
            name: 'teste',
            description: 'aqui description teste',
            brand: 'testando dnv',
            license_plate: '45545445',
            category_id: '45484854efe4f54efe',
            fine_amount: 123,
            daily_rate:8999
        })

        expect(car).toHaveProperty('id')
    })

    it("Should be not be able to create a car with exists license plate", async () => {
        await createCarUseCase.execute({
            name: 'teste',
            description: 'aqui description teste',
            brand: 'testando dnv',
            license_plate: '45545445',
            category_id: '45484854efe4f54efe',
            fine_amount: 123,
            daily_rate:8999
        }) 

        await expect(createCarUseCase.execute({
                name: 'teste2',
                description: 'aqui description teste2',
                brand: 'testando dnv2',
                license_plate: '45545445',
                category_id: '45484854efe4f54efe2',
                fine_amount: 123,
                daily_rate:8999
            }) 
        ).rejects.toEqual(new AppError('Car Already existing'))
    })

    it("Should be able to create a car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: 'teste',
            description: 'aqui description teste',
            brand: 'testando dnv',
            license_plate: '45545445',
            category_id: '45484854efe4f54efe',
            fine_amount: 123,
            daily_rate:8999
        })   
        expect(car.available).toBe(true)
    })
})