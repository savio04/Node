import AppError from "../../../../shared/errors/AppError"
import RentalsRepositoryInMemory from "../../Repositories/in-memory/RentalsRepositoryInMemory"
import CreateRentalUseCase from "./CreateRentalUseCase"

let createRentalUsecase:CreateRentalUseCase
let rentalRepositoryInMemory:RentalsRepositoryInMemory

describe("Create Rental", () => {
    beforeEach(() => {
        rentalRepositoryInMemory = new RentalsRepositoryInMemory
        createRentalUsecase = new CreateRentalUseCase(rentalRepositoryInMemory)
    })

    it("should be able a create a new rental", async () => {
        const rental = await createRentalUsecase.execute({
            user_id: '12348',
            car_id: '1231232',
            expected_date: new Date
        })

        expect(rental).toHaveProperty("id")
        expect(rental).toHaveProperty("start_date")
    })

    it("should not be able to create a new rental if there is another open to the same user", async () => {
        expect(async () => {
            const rental = await createRentalUsecase.execute({
                user_id: '12348',
                car_id: '1231232',
                expected_date: new Date
            })
    
            await createRentalUsecase.execute({
                user_id: '12348',
                car_id: '1231232',
                expected_date: new Date
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to create a new rental if there is another open to the same car", async () => {
        expect(async () => {
            await createRentalUsecase.execute({
                user_id: '123',
                car_id: 'test',
                expected_date: new Date
            })
    
            await createRentalUsecase.execute({
                user_id: '321',
                car_id: 'test',
                expected_date: new Date
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})