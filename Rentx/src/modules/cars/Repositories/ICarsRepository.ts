import Car from "../infra/typeorm/entities/Car";
import Specification from "../infra/typeorm/entities/Specification";

export interface ICarsDTO{
    name:string
    description:string
    daily_rate:number
    license_plate:string
    fine_amount:number
    brand:string
    category_id:string
    specifications?:Specification[]
    id?:string
}

interface ICarsRepository{
    create({
        id,name,description,daily_rate,license_plate,fine_amount,brand,category_id,specifications
    }:ICarsDTO):Promise<Car>
    
    findByLicensePlate(license_plate:string):Promise<Car | undefined>

    findById(id:string):Promise<Car | undefined>

    listAll(brand?:string,category_id?:string,name?:string):Promise<Car[]>

    updateAvailable(id:string,available:boolean):Promise<void>
}

export default ICarsRepository