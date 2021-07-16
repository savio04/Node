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

    async findByUserIdAndRefreshToken(user_id:string,token:string){
        const usersToken = await this.userTokenRepository.findOne({
            user_id,
            refresh_token: token
        })

        return usersToken as UserToken
    }

    async deleteById(id:string){
        await this.userTokenRepository.delete(id)
    }

    async findByRefreshToken(token:string){
        const userToken = await this.userTokenRepository.findOne({
            refresh_token: token
        })

        return userToken as UserToken
    }
}


export default UserTokenRepository