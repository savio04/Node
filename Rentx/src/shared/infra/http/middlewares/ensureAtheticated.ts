import { Request,Response,NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import AppError from '../../../errors/AppError'
import UserRepository from '../../../../modules/accounts/infra/typeorm/repositories/UserRepository'
import UserTokenRepository from '../../../../modules/accounts/infra/typeorm/repositories/UserTokenRepository'
import auth from '../../../../config/auth'

interface IPayload{
    sub:string
}
async function ensureAutheticaded(request:Request,response:Response,next:NextFunction){
    const {authorization} = request.headers
    const userTokenRepository = new UserTokenRepository
    if(!authorization){
        throw new AppError('token not exist',401)
    }

    const [,token] = authorization.split(' ')
    try{
        const {sub:user_id} = verify(
            token,
            auth.secret_refresh_token
        ) as IPayload
    
        const user = await userTokenRepository.findByUserIdAndRefreshToken(
            user_id,
            token
        )
        if(!user){
            throw new AppError('user not existing',401)
        }
        //Adicionando o id apos o usario ser altenticado
        request.user = {
            id: user_id
        }
        next()
    }catch(err){
        throw new AppError(`${err.message}`,401)
    }
}

export default ensureAutheticaded