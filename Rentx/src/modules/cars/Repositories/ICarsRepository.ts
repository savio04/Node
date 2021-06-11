
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
    }:ICarsDTO):Promise<void>
}

export default ICarsRepository