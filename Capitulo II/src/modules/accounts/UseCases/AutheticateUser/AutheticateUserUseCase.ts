import { inject, injectable } from "tsyringe";
import IUsersRepository from "../../Repositories/IUsersRepository";
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthRequest{
    email:string
    password:string
}

@injectable()
class AutheticateUserUseCase{
    constructor(
        @inject('userRepository')
        private userRepository:IUsersRepository
    ){}
    async execute({email,password}:IAuthRequest){
        const userExisting = await this.userRepository.findByEmail(email)

        if(!userExisting){
            throw new Error('Emaill or password incorrect!')
        }

        const passwordCompare = await bcrypt.compare(password,userExisting.password)

        if(!passwordCompare){
            throw new Error('Emaill or password incorrect!')
        }

        const token = sign({}, "a3675 95574905e7f68deba4d753a8e3b",{
            subject: userExisting.id,
            expiresIn: "1d"
        })

        return {
            user:{
                name:userExisting.name,
                email:userExisting.email
            },
            token
        }
    }
}


export default AutheticateUserUseCase