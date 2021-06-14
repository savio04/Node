import Car from "../infra/typeorm/entities/Car";

export interface ICarsDTO{
    name:string
    description:string
    daily_rate:number
    license_plate:string
    fine_amount:number
    brand:string
    category_id:string
}

interface ICarsRepository{
    create({
        name,description,daily_rate,license_plate,fine_amount,brand,category_id
    }:ICarsDTO):Promise<Car>
    
    findByLicensePlate(license_plate:string):Promise<Car | undefined>

    listAll(brand?:string,category_id?:string,name?:string):Promise<Car[]>
}

export default ICarsRepository