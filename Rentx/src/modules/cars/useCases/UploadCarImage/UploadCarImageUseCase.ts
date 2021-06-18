import { inject, injectable } from "tsyringe";
import ICarsImageRepository from "../../Repositories/ICarsImageRepository";

interface IRequest{
    car_id:string
    images_name:string[]
}

@injectable()
class UploadCarImageUseCase{

    constructor(
        @inject('carsImageRepository')
        private carsImageRepsitory:ICarsImageRepository
    ){}
    
    async execute({ car_id, images_name}:IRequest){
        images_name.map(async (image_name) => {
            await this.carsImageRepsitory.create(
                car_id,
                image_name
            )
        })
    }
}

export default UploadCarImageUseCase