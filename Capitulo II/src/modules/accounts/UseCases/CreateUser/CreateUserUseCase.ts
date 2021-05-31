import { inject,injectable } from 'tsyringe'
import IUsersRepository, { IUserDTO } from '../../Repositories/IUsersRepository'
import bcrypt from 'bcryptjs'

@injectable()
class CreateUserUseCase{
    constructor(
        @inject('userRepository')
        private Repository:IUsersRepository
    ){}
    
    async execute({name,email,password,driver_license}:IUserDTO){
        const passwordCripto = await bcrypt.hash(password,10)
        const emailExisting = await this.Repository.findByEmail(email)

        if(emailExisting){
            throw new Error('Email already existing')
        }

        await this.Repository.create({
            name,
            email,
            password:passwordCripto,
            driver_license,
        })
    }
}

export default CreateUserUseCase