import AppError from "../../../../shared/errors/AppError";
import IRentalsRepository from "../../Repositories/IRentalsRepository";
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'

dayjs.extend(utc)
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
        const minimunHours = 24
        const carUnAvaliable = await this.rentalsRepository.findOpenRentalByCar(car_id)

        if(carUnAvaliable){
            throw new AppError("Car is Unavailable")
        }

        const OpenRentalToUser = await this.rentalsRepository.findOpenRentalByUser(user_id)

        if(OpenRentalToUser){
            throw new AppError("There is a rental in progress for user!")
        }
        const expectedReturnDateFormat = dayjs(expected_date)
        .utc()
        .local()
        .format()

        const dateNow = dayjs()
        .utc()
        .local()
        .format()
        const compare = dayjs(expectedReturnDateFormat).diff(dateNow, 'hours')

        if(compare < minimunHours){
            throw new AppError('invalid return time')
        }
        
        const rental = await this.rentalsRepository.create({
            car_id,
            user_id,
            expected_date
        })

        return rental
    }
}

export default CreateRentalUseCase