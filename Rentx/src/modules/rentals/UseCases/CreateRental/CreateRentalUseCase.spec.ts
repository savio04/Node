import AppError from "../../../../shared/errors/AppError"
import RentalsRepositoryInMemory from "../../Repositories/in-memory/RentalsRepositoryInMemory"
import CreateRentalUseCase from "./CreateRentalUseCase"
import dayjs from "dayjs"

let createRentalUsecase:CreateRentalUseCase
let rentalRepositoryInMemory:RentalsRepositoryInMemory

describe("Create Rental", () => {
    const dayAdd24Hours = dayjs().add(1,'day').toDate()
    beforeEach(() => {
        rentalRepositoryInMemory = new RentalsRepositoryInMemory
        createRentalUsecase = new CreateRentalUseCase(rentalRepositoryInMemory)
    })

    it("should be able a create a new rental", async () => {
        const rental = await createRentalUsecase.execute({
            user_id: '12348',
            car_id: '1231232',
            expected_date: dayAdd24Hours
        })

        expect(rental).toHaveProperty("id")
        expect(rental).toHaveProperty("start_date")
    })

    it("should not be able to create a new rental if there is another open to the same user", async () => {
        expect(async () => {
            const rental = await createRentalUsecase.execute({
                user_id: '12348',
                car_id: '1231232',
                expected_date: dayAdd24Hours
            })
    
            await createRentalUsecase.execute({
                user_id: '12348',
                car_id: '1231232',
                expected_date: dayAdd24Hours
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to create a new rental if there is another open to the same car", async () => {
        expect(async () => {
            await createRentalUsecase.execute({
                user_id: '123',
                car_id: 'test',
                expected_date: dayAdd24Hours
            })
    
            await createRentalUsecase.execute({
                user_id: '321',
                car_id: 'test',
                expected_date: dayAdd24Hours
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to create a new rental with invalid return time", async () => {
        expect(async () => {
            await createRentalUsecase.execute({
                user_id: '123',
                car_id: 'test',
                expected_date: dayjs().toDate()
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})