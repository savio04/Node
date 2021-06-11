import { container } from "tsyringe";
import { Request, Response } from 'express'
import CreateCarUseCase from "./CreateCarUseCase";

class CarsController{
    async handle(request:Request,response:Response){
        const {
            name,
            description,
            daily_rate,
            brand,
            fine_amount,
            category_id,
            license_plate
        } = request.body
        const createCarsUseCase = container.resolve(CreateCarUseCase)

        const car = await createCarsUseCase.execute({
            name,
            description,
            daily_rate,
            brand,
            fine_amount,
            category_id,
            license_plate
        })

        return response.status(201).json(car)
    }
}

export default CarsController