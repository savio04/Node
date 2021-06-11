import { inject, injectable } from "tsyringe"
import ICarsRepository, { ICarsDTO } from "../../Repositories/ICarsRepository"

@injectable()
class CreateCarUseCase{
     
    constructor(
        @inject("carsRepository")
        private Carsrepository:ICarsRepository
    ){}

    async execute({
        name,
        description,
        daily_rate,
        brand,
        fine_amount,
        category_id,
        license_plate
    }:ICarsDTO){
        await this.Carsrepository.create({
            name,
            description,
            fine_amount,
            daily_rate,
            brand,
            category_id,
            license_plate
        })
    }
}

export default CreateCarUseCase