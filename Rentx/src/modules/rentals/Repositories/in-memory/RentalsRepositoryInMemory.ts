import { v4 } from "uuid";
import Rental from "../../infra/typeorm/entities/Rental";
import IRentalsRepository, { IRentalDTO } from "../IRentalsRepository";


class RentalsRepositoryInMemory implements IRentalsRepository{
    
    private rentals:Rental[]

    constructor(){
        this.rentals = []
    }

    async create({car_id,user_id,expected_date}:IRentalDTO){
        const rental = new Rental

        Object.assign(rental, {
            id: v4(),
            car_id,
            user_id,
            expected_date,
            start_date: new Date
        })

        this.rentals.push(rental)

        return rental
    }

    async findOpenRentalByCar(car_id:string){
        const car = this.rentals.find(rental => rental.car_id === car_id && !rental.end_date)

        return car
    }

    async findOpenRentalByUser(user_id:string){
        const user = this.rentals.find(rental => rental.user_id === user_id && rental.end_date === null)
        
        return user
    }
}

export default RentalsRepositoryInMemory