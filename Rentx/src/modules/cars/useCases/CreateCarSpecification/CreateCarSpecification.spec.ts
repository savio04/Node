import AppError from "../../../../shared/errors/AppError"
import CarsRepositoryInMemory from "../../Repositories/in-memory/CarsRepositoryInMemory"
import CreateCarSpecificationUseCase from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase:CreateCarSpecificationUseCase
let carRepositoryInMemory:CarsRepositoryInMemory


describe("Create car specififcation", () => {
    beforeEach(() => {
        carRepositoryInMemory = new CarsRepositoryInMemory
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carRepositoryInMemory)
    })

    it("should be able to add a new specification to a now-existing car", async () => {
        expect(async () => {
            await createCarSpecificationUseCase.execute({
                car_id: '12345',
                specification_id: ['4545']
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should be able to add a new specification to the car", async () => {

        const car = await carRepositoryInMemory.create({
            name: 'teste',
            description: 'aqui description teste',
            brand: 'testando dnv',
            license_plate: '45545445',
            category_id: '45484854efe4f54efe',
            fine_amount: 123,
            daily_rate:8999
        })

        await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specification_id: ['4545']
        })
    })
})