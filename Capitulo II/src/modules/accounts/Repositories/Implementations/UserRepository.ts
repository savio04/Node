import { getRepository, Repository } from "typeorm";
import User from "../../entities/User";
import IUsersRepository, {IUserDTO} from '../IUsersRepository'


class UserRepository implements IUsersRepository{
    private UserRepository:Repository<User>

    constructor(){
        this.UserRepository = getRepository(User)
    }

    async create({name,email,driver_license,password}:IUserDTO){
        const user = this.UserRepository.create({
            name,
            email,
            password,
            driver_license
        })

        await this.UserRepository.save(user)
    }

    async findByEmail(email:string){
        const emailExiting = await this.UserRepository.findOne({email})

        return emailExiting
    }

    async findById(id:string){
        const user = await this.UserRepository.findOne({id})

        return user
    }
}

export default UserRepository