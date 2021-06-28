import { inject, injectable } from "tsyringe";
import IRentalsRepository from "../../Repositories/IRentalsRepository";

@injectable()
class ListRentalsByUserUseCase{
    constructor(
        @inject('rentalRepository')
        private rentalsReposiotry:IRentalsRepository 
    ){}
    async execute(id:string){
        const rentals = await this.rentalsReposiotry.findRentalsByUser(id)
        return rentals
    }
}

export default ListRentalsByUserUseCase