import { inject, injectable } from "tsyringe";
import S3StorageProvider from "../../../../shared/container/providers/StorageProvider/implementations/S3StorageProvider";
import ICarsImageRepository from "../../Repositories/ICarsImageRepository";

interface IRequest {
    car_id: string;
    images_name: string[];
}

@injectable()
class UploadCarImageUseCase {
    constructor(
        @inject("carsImageRepository")
        private carsImageRepsitory: ICarsImageRepository,
        @inject("storageProvider")
        private storageProvider: S3StorageProvider
    ) {}

    async execute({ car_id, images_name }: IRequest) {
        images_name.map(async (image_name) => {
            await this.carsImageRepsitory.create(car_id, image_name);

            await this.storageProvider.save(image_name, "cars");
        });
    }
}

export default UploadCarImageUseCase;
