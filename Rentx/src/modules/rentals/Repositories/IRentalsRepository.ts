import User from "../../accounts/infra/typeorm/entities/User";
import Car from "../../cars/infra/typeorm/entities/Car";
import Rental from "../infra/typeorm/entities/Rental";


interface IRentalsRepository{
    findOpenRentalByCar(car_id:string):Promise<Rental | undefined>
    findOpenRentalByUser(user_id:string):Promise<Rental | undefined>
}


export default IRentalsRepository