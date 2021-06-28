import { Request, Response } from "express";
import { container } from "tsyringe";
import DevolutionRentalUseCase from "./DevolutionRentalUseCase";

class DevolutionRentalController{
    async handle(request:Request,response:Response){
        const {id} = request.params
        const user_id = request.user.id
        const devolutionUseCase = container.resolve(DevolutionRentalUseCase)

        const rental = await devolutionUseCase.execute({
            id,
            user_id
        })

        return response.status(200).json(rental)
    }
}

export default DevolutionRentalController