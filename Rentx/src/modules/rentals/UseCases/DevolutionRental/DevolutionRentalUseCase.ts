import { inject, injectable } from "tsyringe";
import IDateProvider from "../../../../shared/container/providers/DateProvider/IDateProvider";
import AppError from "../../../../shared/errors/AppError";
import ICarsRepository from "../../../cars/Repositories/ICarsRepository";
import IRentalsRepository from "../../Repositories/IRentalsRepository";

interface IRequest{
    id:string
    user_id:string    
}

@injectable()
class DevolutionRentalUseCase{
    constructor(
        @inject('rentalRepository')
        private rentalRepository:IRentalsRepository,
        @inject('carsRepository')
        private carsRepository:ICarsRepository,
        @inject('dateProvider')
        private dateProvider:IDateProvider,
    ){}

    async execute({id,user_id}:IRequest){
        const rental = await this.rentalRepository.findById(id)
        const minimum_daily = 1
        
        if(!rental){
            throw new AppError('Rental does not existing')
        }
        const car = await this.carsRepository.findById(rental?.car_id)

        if(!car){
            throw new AppError('Car does not existing')
        }

        const dateNow = this.dateProvider.dateNow()

        let daily = this.dateProvider.compareInDays(
            rental.expected_date,
            this.dateProvider.dateNow()
        )

        if(daily <= 0){
            daily = minimum_daily
        }

        const delay = this.dateProvider.compareInDays(
            rental.expected_date,
            dateNow
        )
        let total = 0

        if(delay > 0){
            const calculate_fine = delay * car.fine_amount
            total = calculate_fine
        }

        total += daily * car.daily_rate
        rental.end_date = this.dateProvider.dateNow()
        rental.total = total

        await this.rentalRepository.create(rental)
        await this.carsRepository.updateAvailable(car.id,true)

        return rental
    }
}

export default DevolutionRentalUseCase