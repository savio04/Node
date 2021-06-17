import { Request, Response } from "express";
import { container } from "tsyringe";
import ListAvailableCarsUseCase from './ListAvailableCarsUseCase'


class ListAvailableCarsController{
    async handle(request:Request,response:Response){
        const { brand,name,category_id } = request.query
        const listCarsUseCase = container.resolve(ListAvailableCarsUseCase)

        const cars = await listCarsUseCase.execute({
            name: name as string,
            brand: brand as string,
            category_id: category_id as string
        })

        return response.status(200).json(cars)
    }
}

export default ListAvailableCarsController