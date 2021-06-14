import ICarsRepository from "../../Repositories/ICarsRepository";

interface IRequest{
    category_id?:string
    brand?:string,
    name?:string
}

class ListCarsUseCase{
    constructor(private repositoryCars:ICarsRepository){}

    async execute({name,brand, category_id}:IRequest){
        const cars = await this.repositoryCars.listAll(
            name,
            brand,
            category_id
        )

        return cars
    }
}

export default ListCarsUseCase