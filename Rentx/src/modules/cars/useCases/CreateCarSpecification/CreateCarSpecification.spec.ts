import AppError from "../../../../shared/errors/AppError"
import CarsRepositoryInMemory from "../../Repositories/in-memory/CarsRepositoryInMemory"
import SpecificationRepositoryInMemory from "../../Repositories/in-memory/SpecificationRepositoryInMemory"
import CreateCarSpecificationUseCase from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase:CreateCarSpecificationUseCase
let carRepositoryInMemory:CarsRepositoryInMemory
let specificationrepsoitoryInMemory:SpecificationRepositoryInMemory


describe("Create car specififcation", () => {
    beforeEach(() => {
        carRepositoryInMemory = new CarsRepositoryInMemory
        specificationrepsoitoryInMemory = new SpecificationRepositoryInMemory
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carRepositoryInMemory,
            specificationrepsoitoryInMemory
        )
    })

    it("should be able to add a new specification to a now-existing car", async () => {
        await expect( createCarSpecificationUseCase.execute({
                car_id: '12345',
                specification_id: ['4545']
            })
        ).rejects.toEqual(new AppError('Car not existing'))
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

        const specification = await specificationrepsoitoryInMemory.create(
            'name teste',
            'description teste'
        )

        const specificationCars = await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specification_id: [specification.id]
        })

        expect(specificationCars).toHaveProperty('specifications')
        expect(specificationCars.specifications.length).toBe(1)
    })
})