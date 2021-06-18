import { Request,Response } from 'express'
import { container } from 'tsyringe'
import UploadCarImageUseCase from './UploadCarImageUseCase'

interface IFile{
    filename:string
}

class UploadCarImageController{
    async handle(request:Request,response:Response){
        const { id } = request.params
        const image = request.files as IFile[]
        const carImageUseCase = container.resolve(UploadCarImageUseCase)

        const fileNames = image.map(image => image.filename)

        await carImageUseCase.execute({
            car_id: id,
            images_name: fileNames
        })

        return response.status(201).send()
    }

}

export default UploadCarImageController