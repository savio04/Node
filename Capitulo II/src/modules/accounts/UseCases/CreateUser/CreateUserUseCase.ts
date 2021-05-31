import { inject,injectable } from 'tsyringe'
import IUsersRepository, { IUserDTO } from '../../Repositories/IUsersRepository'

@injectable()
class CreateUserUseCase{
    constructor(
        @inject('userRepository')
        private Repository:IUsersRepository
    ){}
    
    async execute({name,email,password,driver_license}:IUserDTO){
        await this.Repository.create({
            name,
            email,
            password,
            driver_license,
        })
    }
}

export default CreateUserUseCase