import { Request,Response } from 'express'
import { container } from 'tsyringe'
import CreateRentalUseCase from './CreateRentalUseCase'
class CreateRentalController{
    async handle(request:Request,response:Response){
        const rentalRepository = container.resolve(CreateRentalUseCase)
        const {car_id,expected_date} = request.body
        const { id } = request.user

        const rental = await rentalRepository.execute({
            user_id:id,
            car_id,
            expected_date
        })

        return response.status(201).json(rental)
    }
}

export default CreateRentalController