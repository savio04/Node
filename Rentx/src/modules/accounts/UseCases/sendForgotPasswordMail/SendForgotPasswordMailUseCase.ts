import { inject, injectable } from "tsyringe";
import { v4 } from "uuid";
import IDateProvider from "../../../../shared/container/providers/DateProvider/IDateProvider";
import IMailProvider from "../../../../shared/container/providers/MailProvider/IMailProvider";
import AppError from "../../../../shared/errors/AppError";
import IUsersRepository from "../../Repositories/IUsersRepository";
import IUserTokenRepository from "../../Repositories/IUserTokenRepository";
import { resolve } from 'path'

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
        const tamplatePath = resolve(
            __dirname,
            "..",
            "..",
            "views",
            "emails",
            "forgotPassword.hbs"
        )

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

        const variables = {
            name: user.name,
            link: `${process.env.FORGOT_MAIL_URL}${token}`
        }

        await this.EtherealMailProvider.sendEmail(
            email,
            'Recuperação de senha',
            variables,
            tamplatePath
        )
    }
}


export default SendForgotPasswordMailUseCase