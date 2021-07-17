import { inject, injectable } from "tsyringe";
import IUsersRepository from "../../Repositories/IUsersRepository";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import AppError from "../../../../shared/errors/AppError";
import IUserTokenRepository from "../../Repositories/IUserTokenRepository";
import auth from "../../../../config/auth";
import IDateProvider from "../../../../shared/container/providers/DateProvider/IDateProvider";

interface IAuthRequest {
    email: string;
    password: string;
}

@injectable()
class AutheticateUserUseCase {
    constructor(
        @inject("userRepository")
        private userRepository: IUsersRepository,
        @inject("userTokenRepository")
        private userTokenRepository: IUserTokenRepository,
        @inject("dateProvider")
        private dateProvider: IDateProvider
    ) {}
    async execute({ email, password }: IAuthRequest) {
        const userExisting = await this.userRepository.findByEmail(email);

        if (!userExisting) {
            throw new AppError("Emaill or password incorrect!");
        }

        const passwordCompare = await bcrypt.compare(
            password,
            userExisting.password
        );

        if (!passwordCompare) {
            throw new AppError("Emaill or password incorrect!");
        }

        const token = sign({}, auth.secret_token, {
            subject: userExisting.id,
            expiresIn: auth.expiresIn_token,
        });

        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: userExisting.id,
            expiresIn: auth.expiresIn_refresh_token,
        });

        const refresh_token_expiresIn = this.dateProvider.addDays(
            auth.expires_refresh_token_days
        );

        await this.userTokenRepository.create({
            user_id: userExisting.id,
            expires_date: refresh_token_expiresIn,
            refresh_token,
        });

        return {
            user: {
                name: userExisting.name,
                email: userExisting.email,
            },
            token,
            refresh_token,
        };
    }
}

export default AutheticateUserUseCase;
