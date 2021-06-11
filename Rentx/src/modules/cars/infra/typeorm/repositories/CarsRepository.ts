import { getRepository, Repository } from "typeorm";
import ICarsRepository, { ICarsDTO } from "../../../Repositories/ICarsRepository";
import Car from "../entities/Car";

class CarsRepository implements ICarsRepository {
    private carsRepository:Repository<Car>
    
    constructor(){
        this.carsRepository = getRepository(Car)
    }

    async create({
        name,
        description,
        brand,
        category_id,
        daily_rate,
        fine_amount,
        license_plate
    }:ICarsDTO){
        const car = this.carsRepository.create({
            name,
            description,
            brand,
            category_id,
            daily_rate,
            fine_amount,
            license_plate
        })

        await this.carsRepository.save(car)

        return car
    }

    async findByLicensePlate(license_plate:string){
        const car = await this.carsRepository.findOne({
            license_plate
        })

        return car
    }
}

export default CarsRepository