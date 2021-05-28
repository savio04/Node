import { inject,injectable } from 'tsyringe'
import IUsersrepository, { IUserDTO } from '../../Repositories/IUsersRepository'

@injectable()
class CreateUserUseCase{
    constructor(
        @inject('userRepository')
        private CreateUserRepository:IUsersrepository
    ){}
    
    async execute({name,email,password,driver_license,username}:IUserDTO){
        await this.CreateUserRepository.create({
            name,
            email,
            password,
            driver_license,
            username
        })
    }
}

export default CreateUserUseCase