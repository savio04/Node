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
        license_plate,
        specifications
    }:ICarsDTO){
        const car = this.carsRepository.create({
            name,
            description,
            brand,
            category_id,
            daily_rate,
            fine_amount,
            license_plate,
            specifications
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

    async listAll(brand:string, name:string, category_id:string){
        const carsQuery = this.carsRepository
        .createQueryBuilder("c")
        .where("available =:available", {available: true})

        if(brand){
            carsQuery.andWhere("brand =:brand", {brand})
        }
        if(name){
            carsQuery.andWhere("name =:name", {name})
        }
        if(category_id){
            carsQuery.andWhere("category_id = :category_id", {category_id})
        }

        const cars = await carsQuery.getMany()
        return cars
    }

    async findById(id:string){
        const car = await this.carsRepository.findOne({id})

        return car
    }
}

export default CarsRepository