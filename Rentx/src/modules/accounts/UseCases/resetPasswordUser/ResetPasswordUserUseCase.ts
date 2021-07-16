import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import IDateProvider from "../../../../shared/container/providers/DateProvider/IDateProvider";
import AppError from "../../../../shared/errors/AppError";
import User from "../../infra/typeorm/entities/User";
import IUsersRepository from "../../Repositories/IUsersRepository";
import IUserTokenRepository from "../../Repositories/IUserTokenRepository";

interface IRequest{
    token:string
    password:string
}

@injectable()
class ResetPasswordUserUseCase{ 
    constructor(
        @inject('userTokenRepository')
        private usersTokenRepository:IUserTokenRepository,
        @inject('dateProvider')
        private dateProvider:IDateProvider,
        @inject('userRepository')
        private usersRepository:IUsersRepository
    ){}
    async execute({token,password}:IRequest){
        const userToken = await this.usersTokenRepository.findByRefreshToken(token)

        if(!userToken){
            throw new AppError('Token invalid!')
        }

        if(
            this.dateProvider.compareIfBefore(
                userToken.expires_date,
                this.dateProvider.dateNow()
            )
        ){
            throw new AppError('token expired!')
        }

        const user = await this.usersRepository.findById(userToken.user_id) as User

        user.password = await hash(password,10)

        await this.usersRepository.create(user)

        await this.usersTokenRepository.deleteById(userToken.id)
    }
}

export default ResetPasswordUserUseCase