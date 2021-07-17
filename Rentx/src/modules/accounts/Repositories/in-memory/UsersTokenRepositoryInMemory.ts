import UserToken from "../../infra/typeorm/entities/UserToken";
import IUserTokenRepository, { IUserTokenDTO } from "../IUserTokenRepository";

class UsersTokenRepositoryInMemory implements IUserTokenRepository {
    private usersToken: UserToken[] = [];

    async create(data: IUserTokenDTO) {
        const userToken = new UserToken();

        Object.assign(userToken, data);

        this.usersToken.push(userToken);

        return userToken;
    }
    async findByUserIdAndRefreshToken(user_id: string, token: string) {
        const userToken = this.usersToken.find(
            (ut) => ut.user_id === user_id && ut.refresh_token === token
        );

        return userToken as UserToken;
    }
    async deleteById(id: string): Promise<void> {
        const indexUserToken = this.usersToken.findIndex((ut) => ut.id === id);

        this.usersToken.splice(indexUserToken, 1);
    }
    async findByRefreshToken(token: string): Promise<UserToken> {
        const userToken = this.usersToken.find(
            (ut) => ut.refresh_token === token
        );

        return userToken as UserToken;
    }
}

export default UsersTokenRepositoryInMemory;
