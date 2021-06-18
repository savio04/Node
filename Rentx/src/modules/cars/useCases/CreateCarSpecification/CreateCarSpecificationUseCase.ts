import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppError";
import ICarsRepository from "../../Repositories/ICarsRepository";
import IspecificationRepository from "../../Repositories/ISpecificationRepository";


interface IRequest{
    car_id:string
    specification_id:string[]
}

@injectable()
class CreateCarSpecificationUseCase{

    constructor(
        @inject('carsRepository')
        private carsRepository:ICarsRepository,

        @inject('specificationRepository')
        private specificationRepository:IspecificationRepository
    ){}

    async execute({car_id,specification_id}:IRequest){
        const carexisting = await this.carsRepository.findById(car_id)

        if(!carexisting){
            throw new AppError('Car not existing')
        }
        const specifications = await this.specificationRepository.findById(
            specification_id
        )
    
        carexisting.specifications = specifications

        await this.carsRepository.create(carexisting)

        return carexisting
    }
}

export default CreateCarSpecificationUseCase