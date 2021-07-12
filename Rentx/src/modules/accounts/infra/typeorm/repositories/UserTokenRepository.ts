import { getRepository, Repository } from 'typeorm'
import IUserTokenRepository, { IUserTokenDTO } from '../../../Repositories/IUserTokenRepository'
import UserToken from '../entities/UserToken'


class UserTokenRepository implements IUserTokenRepository{
    private userTokenRepository:Repository<UserToken>
    constructor(){
        this.userTokenRepository = getRepository(UserToken)
    }
    async create({user_id,expires_date,refresh_token}: IUserTokenDTO){
        const userToken = this.userTokenRepository.create({
            user_id,
            expires_date,
            refresh_token
        })

        await this.userTokenRepository.save(userToken)

        return userToken
    }
}


export default UserTokenRepository