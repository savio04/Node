import AppError from "../../../../shared/errors/AppError";
import IRentalsRepository from "../../Repositories/IRentalsRepository";
import IDateProvider from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { inject, injectable } from "tsyringe";
import ICarsRepository from "../../../cars/Repositories/ICarsRepository";

interface IRequest{
    car_id:string
    user_id:string
    expected_date:Date
}

@injectable()
class CreateRentalUseCase{
    constructor(
        @inject('rentalRepository')
        private rentalsRepository:IRentalsRepository,
        @inject('dateProvider')
        private dateProvider:IDateProvider,
        @inject('carsRepository')
        private carsRepository:ICarsRepository
    ){}
    async execute({ car_id,user_id,expected_date }:IRequest){
        const minimunHours = 24
        const carUnAvaliable = await this.rentalsRepository.findOpenRentalByCar(car_id)

        if(carUnAvaliable){
            throw new AppError("Car is Unavailable")
        }

        const OpenRentalToUser = await this.rentalsRepository.findOpenRentalByUser(user_id)

        if(OpenRentalToUser){
            throw new AppError("There is a rental in progress for user!")
        }
        
        const compare = this.dateProvider.compare(
            this.dateProvider.dateNow(),
            expected_date
        )

        if(compare < minimunHours){
            throw new AppError('invalid return time')
        }

        const rental = await this.rentalsRepository.create({
            car_id,
            user_id,
            expected_date
        })

        await this.carsRepository.updateAvailable(car_id,false)

        return rental
    }
}

export default CreateRentalUseCase