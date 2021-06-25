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
        await createRentalUsecase.execute({
            user_id: '12348',
            car_id: '1231232',
            expected_date: new Date
        })
    })
})