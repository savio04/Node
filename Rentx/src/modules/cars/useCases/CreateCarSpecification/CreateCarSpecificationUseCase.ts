import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppError";
import ICarsRepository from "../../Repositories/ICarsRepository";


interface IRequest{
    car_id:string
    specification_id:string[]
}

@injectable()
class CreateCarSpecificationUseCase{

    constructor(
        @inject('carsRepository')
        private carsRepository:ICarsRepository
    ){}

    async execute({car_id,specification_id}:IRequest){
        const carexisting = await this.carsRepository.findById(car_id)

        if(!carexisting){
            throw new AppError('Car not existing')
        }

    }
}

export default CreateCarSpecificationUseCase