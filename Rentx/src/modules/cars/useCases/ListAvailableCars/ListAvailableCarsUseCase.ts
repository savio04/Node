import { inject, injectable } from "tsyringe";
import ICarsRepository from "../../Repositories/ICarsRepository";

interface IRequest{
    category_id?:string
    brand?:string,
    name?:string
}

@injectable()
class ListAvailableCarsUseCase{
    constructor(
        @inject('carsRepository')
        private repositoryCars:ICarsRepository
    ){}

    async execute({name,brand, category_id}:IRequest){
        
        const cars = await this.repositoryCars.listAll(
            brand,
            name,
            category_id
        )

        return cars
    }
}

export default ListAvailableCarsUseCase