import { Request, response, Response } from "express";
import { container } from "tsyringe";
import ListRentalsByUserUseCase from "./ListRentalsByUserUseCase";

class ListRentalsByUserController{
    async handle(request:Request,response:Response){
        const listRentalsUseCase = container.resolve(ListRentalsByUserUseCase)
        const user_id = request.user.id

        const rentals = await listRentalsUseCase.execute(user_id)

        return response.json(rentals)
    }
}

export default ListRentalsByUserController