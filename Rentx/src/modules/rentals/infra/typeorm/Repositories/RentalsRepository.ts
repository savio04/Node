import { getRepository, Repository } from "typeorm";
import IRentalsRepository, { IRentalDTO } from "../../../Repositories/IRentalsRepository";
import Rental from "../entities/Rental";


class RentalsRepository implements IRentalsRepository{

    private rentalRepository:Repository<Rental>

    constructor(){
        this.rentalRepository = getRepository(Rental)
    }
    async create({car_id,user_id,expected_date}:IRentalDTO){
        const rental = this.rentalRepository.create({
            car_id,
            user_id,
            expected_date
        })

        await this.rentalRepository.save(rental)

        return rental
    }

    async findOpenRentalByCar(car_id:string){
        return await this.rentalRepository.findOne({car_id})

    }

    async findOpenRentalByUser(user_id:string){
        return await this.rentalRepository.findOne({user_id})
    }

    async findById(id:string){
        const rental = await this.rentalRepository.findOne({id})

        return rental
    }
}

export default RentalsRepository