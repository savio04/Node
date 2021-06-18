import { Request,Response } from 'express'
import { container } from 'tsyringe'
import CreateCarSpecificationUseCase from './CreateCarSpecificationUseCase'


class CreateCarSpecificationController{
    async hadle(request:Request, response:Response){
        const {id} = request.params
        const { specification_id } = request.body
        const specificationUseCase = container.resolve(CreateCarSpecificationUseCase)

        const car = await specificationUseCase.execute({
            car_id:id,
            specification_id
        })

        return response.status(201).json(car)
    }
}

export default CreateCarSpecificationController