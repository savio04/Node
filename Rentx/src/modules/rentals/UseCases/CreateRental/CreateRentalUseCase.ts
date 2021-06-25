import AppError from "../../../../shared/errors/AppError";
import IRentalsRepository from "../../Repositories/IRentalsRepository";

interface IRequest{
    car_id:string
    user_id:string
    expected_date:Date
}

class CreateRentalUseCase{

    constructor(
        private rentalsRepository:IRentalsRepository
    ){}
    async execute({ car_id,user_id,expected_date }:IRequest){
        const carUnAvaliable = await this.rentalsRepository.findOpenRentalByCar(car_id)

        if(carUnAvaliable){
            throw new AppError("Car is Unavailable")
        }

        const OpenRentalToUser = await this.rentalsRepository.findOpenRentalByUser(user_id)

        if(OpenRentalToUser){
            throw new AppError("There is a rental in progress for user!")
        }
    }
}

export default CreateRentalUseCase