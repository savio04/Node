import { sign, verify } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import auth from '../../../../config/auth'
import IDateProvider from '../../../../shared/container/providers/DateProvider/IDateProvider'
import AppError from '../../../../shared/errors/AppError'
import IUserTokenRepository from '../../Repositories/IUserTokenRepository'

interface IPayload{
    sub: string
    email: string
}

@injectable()
class RefreshTokenUseCase{
    constructor(
        @inject('userTokenRepository')
        private usersTokenrepository: IUserTokenRepository,
        @inject('dateProvider')
        private dateProvider: IDateProvider
    ){}
    async execute(token:string){
        const {email,sub} = verify(token,auth.secret_refresh_token) as IPayload
        const userToken = await this.usersTokenrepository
            .findByUserIdAndRefreshToken(sub,token)

        if(!userToken){
            throw new AppError('Refresh token does not exists!')
        }

        await this.usersTokenrepository.deleteById(userToken.id)

        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expiresIn_refresh_token
        })

        const refresh_token_expiresIn = this.dateProvider.addDays(
            auth.expires_refresh_token_days
        )

        this.usersTokenrepository.create({
            refresh_token,
            user_id:sub,
            expires_date: refresh_token_expiresIn
        })

        return refresh_token
    }
}

export default RefreshTokenUseCase