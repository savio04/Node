import { inject, injectable } from "tsyringe";
import { v4 } from "uuid";
import IDateProvider from "../../../../shared/container/providers/DateProvider/IDateProvider";
import AppError from "../../../../shared/errors/AppError";
import IUsersRepository from "../../Repositories/IUsersRepository";
import IUserTokenRepository from "../../Repositories/IUserTokenRepository";

@injectable()
class SendForgotPasswordMailUseCase{
    constructor(
        @inject('userRepository')
        private userReposityory:IUsersRepository,
        @inject('userTokenRepository')
        private userTokenRepository:IUserTokenRepository,
        @inject('dateProvider')
        private dateProvider:IDateProvider,
        @inject('mailProvider')
        private EtherealMailProvider:IMailProvider
    ){}
    async execute(email:string){
        const user = await this.userReposityory.findByEmail(email)

        if(!user){
            throw new AppError('User does not exists!')
        }

        const token = v4()
        const expires_date = this.dateProvider.addDays(3)

        await this.userTokenRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date
        })

        await this.EtherealMailProvider.sendEmail(
            email,
            'Recuperação de senha',
            `O link para recuperar senha ${token}`
        )
    }
}


export default SendForgotPasswordMailUseCase