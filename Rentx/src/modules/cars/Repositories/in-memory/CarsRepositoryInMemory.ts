import Car from "../../infra/typeorm/entities/Car";
import ICarsRepository, { ICarsDTO } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository{
    private Cars:Car[]

    constructor(){
        this.Cars = []
    }
    async create({
        name,
        description,
        brand,
        fine_amount,
        daily_rate,
        category_id,
        license_plate
    }:ICarsDTO){
        const car = new Car()

        Object.assign(car, {
            name,
            description,
            brand,
            fine_amount,
            daily_rate,
            category_id,
            license_plate
        })

        this.Cars.push(car)
    }
}

export default CarsRepositoryInMemory