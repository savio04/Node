import AppError from "../../../../shared/errors/AppError"
import RentalsRepositoryInMemory from "../../Repositories/in-memory/RentalsRepositoryInMemory"
import CreateRentalUseCase from "./CreateRentalUseCase"
import dayjs from "dayjs"
import DayJsDateProvider from "../../../../shared/container/providers/DateProvider/implemantations/DayjsDateProvider"
import CarsRepositoryInMemory from "../../../cars/Repositories/in-memory/CarsRepositoryInMemory"

let createRentalUsecase:CreateRentalUseCase
let rentalRepositoryInMemory:RentalsRepositoryInMemory
let carsRepositoryInMemory:CarsRepositoryInMemory
let dayProvider:DayJsDateProvider

describe("Create Rental", () => {
    const dayAdd24Hours = dayjs().add(1,'day').toDate()
    beforeEach(() => {
        rentalRepositoryInMemory = new RentalsRepositoryInMemory
        dayProvider = new DayJsDateProvider
        carsRepositoryInMemory = new CarsRepositoryInMemory
        createRentalUsecase = new CreateRentalUseCase(
            rentalRepositoryInMemory,
            dayProvider,
            carsRepositoryInMemory
        )
    })

    it("should be able a create a new rental", async () => {
        const car = await carsRepositoryInMemory.create({
            name: 'test',
            description: 'test',
            daily_rate: 100,
            license_plate: 'test',
            fine_amount: 40,
            category_id: 'test',
            brand: 'brand'
        })
        const rental = await createRentalUsecase.execute({
            user_id: '12348',
            car_id: car.id,
            expected_date: dayAdd24Hours
        })

        expect(rental).toHaveProperty("id")
        expect(rental).toHaveProperty("start_date")
    })

    it("should not be able to create a new rental if there is another open to the same car", async () => {
        await rentalRepositoryInMemory.create({
            car_id: '11111',
            user_id: '123',
            expected_date: dayAdd24Hours
        })

        await expect(createRentalUsecase.execute({
                user_id: '123',
                car_id: 'test',
                expected_date: dayAdd24Hours
            })
        ).rejects.toEqual(new AppError('There is a rental in progress for user!'))
    })

    it("should not be able to create a new rental if there is another open to the same user", async () => {
        await rentalRepositoryInMemory.create({
           car_id: 'test2',
           expected_date: dayAdd24Hours,
           user_id: '321'
        })
        
        await expect(createRentalUsecase.execute({
                user_id: '12348',
                car_id: 'test2',
                expected_date: dayAdd24Hours
            })
        ).rejects.toEqual(new AppError('Car is Unavailable'))
    })


    it("should not be able to create a new rental with invalid return time", async () => {
        await expect(createRentalUsecase.execute({
                user_id: '123',
                car_id: 'test',
                expected_date: dayjs().toDate()
            })
        ).rejects.toEqual(new AppError('invalid return time'))
    })
})