import { inject, injectable } from "tsyringe";
import IUsersRepository, { IUserDTO } from "../../Repositories/IUsersRepository";

interface IRequest{
    user_id:string
    avatar_file:string
}

@injectable()
class UpdateUserAvatarUseCase{
    constructor(
        @inject('userRepository')
        private userRepostiroy:IUsersRepository
    ){}

    async execute({user_id,avatar_file}:IRequest){
        const user = await this.userRepostiroy.findById(user_id) as IUserDTO

        user.avatar = avatar_file

        await this.userRepostiroy.create(user)
    }
}

export default UpdateUserAvatarUseCase