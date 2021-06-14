import CarsRepositoryInMemory from "../../Repositories/in-memory/CarsRepositoryInMemory"
import ListCarsUseCase from "./ListCarsUseCase"

let carsRepositoryInMemory:CarsRepositoryInMemory
let listCarsUseCase:ListCarsUseCase

describe('List cars', () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)
    })

    it("should be able to list all available all cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "qulquer coisa",
            description: "fbdfdfbdfbdfb",
            daily_rate: 45,
            brand: "bdfbdfbdfb",
            fine_amount: 79998,
            category_id: "8b87b9dc-f14d-40e1-b042-34a998f43680",
            license_plate: "lk,li,kli"
        })
        const cars = await listCarsUseCase.execute({})

        expect(cars).toEqual([car])
    })

    it("should be able to list all available all cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "fbdfdfbdfbdfb",
            daily_rate: 45,
            brand: "aqui",
            fine_amount: 79998,
            category_id: "8b87b9dc-f14d-40e1-b042-34a998f43680",
            license_plate: "lk,li,kli"
        })
        
        const cars = await listCarsUseCase.execute({
            brand: 'aqui'
        })

        expect(cars).toEqual([car])
    })
})