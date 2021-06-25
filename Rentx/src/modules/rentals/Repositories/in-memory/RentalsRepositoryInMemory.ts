import Rental from "../../infra/typeorm/entities/Rental";
import IRentalsRepository from "../IRentalsRepository";


class RentalsRepositoryInMemory implements IRentalsRepository{
    
    private rentals:Rental[]

    constructor(){
        this.rentals = []
    }

    async findOpenRentalByCar(car_id:string){
        const car = this.rentals.find(rental => rental.car_id === car_id && rental.end_date === null)

        return car
    }

    async findOpenRentalByUser(user_id:string){
        const user = this.rentals.find(rental => rental.user_id === user_id && rental.end_date === null)
        
        return user
    }
}

export default RentalsRepositoryInMemory