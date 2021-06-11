import { v4 } from "uuid";
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
            id: v4(),
            name,
            description,
            brand,
            fine_amount,
            daily_rate,
            category_id,
            license_plate,
            available:true,
            created_at: new Date()
        })

        this.Cars.push(car)

        return car
    }

    async findByLicensePlate(license_plate:string){
        const car = this.Cars.find(car => car.license_plate == license_plate)

        return car;
    }
}

export default CarsRepositoryInMemory