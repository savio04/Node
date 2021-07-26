import { inject, injectable } from "tsyringe";
import IUsersRepository, {
    IUserDTO,
} from "../../Repositories/IUsersRepository";
import IStorageProvider from "../../../../shared/container/providers/StorageProvider/IStorageProvider";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("userRepository")
        private userRepostiroy: IUsersRepository,
        @inject("storageProvider")
        private storageProvider: IStorageProvider
    ) {}

    async execute({ user_id, avatar_file }: IRequest) {
        const user = (await this.userRepostiroy.findById(user_id)) as IUserDTO;

        if (user.avatar) {
            await this.storageProvider.delete(user.avatar, "avatar");
        }
        await this.storageProvider.save(avatar_file, "avatar");

        user.avatar = avatar_file;

        await this.userRepostiroy.create(user);
    }
}

export default UpdateUserAvatarUseCase;
