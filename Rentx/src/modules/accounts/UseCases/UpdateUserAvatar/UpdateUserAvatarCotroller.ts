import { Request,Response } from 'express'
import { container } from 'tsyringe'
import UpdateUserAvatarUseCase from './UpdateUserAvatarUseCase'

class UpdateUserAvatarController{
    async handle(request:Request,response:Response){
        const user_id = request.user.id
        const UpdateAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)
        const avatar_file = request.file.filename

        await UpdateAvatarUseCase.execute({
            user_id,
            avatar_file
        })

        return response.status(204).send()
    }
}


export default UpdateUserAvatarController