import { inject, injectable } from "tsyringe";
import User from "../../infra/typeorm/entities/User";
import UserMap from "../../mapper/UserMapper";
import IUsersRepository from "../../Repositories/IUsersRepository";

@injectable()
class ProfileUserUseCase {
    constructor(
        @inject("userRepository")
        private userRepository: IUsersRepository
    ) {}
    async execute(id: string) {
        const user = await this.userRepository.findById(id) as User

        return UserMap.toDTO(user)
    }
}

export default ProfileUserUseCase;
