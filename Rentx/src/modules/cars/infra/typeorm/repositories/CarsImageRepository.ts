import { getRepository, Repository } from "typeorm";
import ICarsImageRepository from "../../../Repositories/ICarsImageRepository";
import CarImage from "../entities/CarImage";


class CarsImageRespository implements ICarsImageRepository{

    private CarsImageRepository:Repository<CarImage>

    constructor(){
        this.CarsImageRepository = getRepository(CarImage)
    }

    async create(car_id:string, image_name:string){
        const carImage = this.CarsImageRepository.create({
            car_id,
            image_name
        })

        await this.CarsImageRepository.save(carImage)

        return carImage
    }
}

export default CarsImageRespository