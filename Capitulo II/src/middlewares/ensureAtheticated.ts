import { Request,Response,NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import AppError from '../errors/AppError'
import UserRepository from '../modules/accounts/Repositories/Implementations/UserRepository'

interface IPayload{
    sub:string
}
async function ensureAutheticaded(request:Request,response:Response,next:NextFunction){
    const {authorization} = request.headers
    if(!authorization){
        throw new AppError('token not exist',401)
    }

    const [,token] = authorization.split(' ')
    try{
        const {sub:user_id} = verify(token, "a367595574905e7f68deba4d753a8e3b") as IPayload
    
        const userRepository = new UserRepository
        const user = await userRepository.findById(user_id)
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