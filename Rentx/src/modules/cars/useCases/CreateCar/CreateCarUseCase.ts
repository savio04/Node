import AppError from "../../../../shared/errors/AppError"
import ICarsRepository, { ICarsDTO } from "../../Repositories/ICarsRepository"

//@injectable()
class CreateCarUseCase{
     
    constructor(
        //@inject("carsRepository")
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
        const carAlreadyExisiting = await this.Carsrepository.findByLicensePlate(license_plate)
        
        if(carAlreadyExisiting){
            throw new AppError('Car Already existing')
        }
        
        const car = await this.Carsrepository.create({
            name,
            description,
            fine_amount,
            daily_rate,
            brand,
            category_id,
            license_plate
        })

        return car
    }
}

export default CreateCarUseCase