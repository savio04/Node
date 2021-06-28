import Rental from "../infra/typeorm/entities/Rental";



export interface IRentalDTO{
    car_id:string
    user_id:string
    expected_date:Date
    id?:string
    end_date?:Date
    total?:number
}
interface IRentalsRepository{
    findOpenRentalByCar(car_id:string):Promise<Rental | undefined>
    findOpenRentalByUser(user_id:string):Promise<Rental | undefined>
    create({car_id,user_id,expected_date}:IRentalDTO):Promise<Rental>
    findById(id:string):Promise<Rental | undefined>
    findRentalsByUser(id:string):Promise<Rental[]>
}


export default IRentalsRepository