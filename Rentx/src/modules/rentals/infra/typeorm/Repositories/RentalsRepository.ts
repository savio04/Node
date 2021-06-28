import { getRepository, Repository } from "typeorm";
import IRentalsRepository, { IRentalDTO } from "../../../Repositories/IRentalsRepository";
import Rental from "../entities/Rental";


class RentalsRepository implements IRentalsRepository{

    private rentalRepository:Repository<Rental>

    constructor(){
        this.rentalRepository = getRepository(Rental)
    }
    async create({car_id,user_id,expected_date,id,end_date,total}:IRentalDTO){
        const rental = this.rentalRepository.create({
            car_id,
            user_id,
            expected_date,
            end_date,
            id,
            total
        })

        await this.rentalRepository.save(rental)

        return rental
    }

    async findOpenRentalByCar(car_id:string){
        return await this.rentalRepository.findOne({
            where: {car_id,end_date:null}
        })

    }

    async findOpenRentalByUser(user_id:string){
        return await this.rentalRepository.findOne({
            where: {user_id,end_date:null}
        })
    }

    async findById(id:string){
        const rental = await this.rentalRepository.findOne({id})

        return rental
    }
}

export default RentalsRepository