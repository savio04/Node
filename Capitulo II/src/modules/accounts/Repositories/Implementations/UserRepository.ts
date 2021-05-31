import { getRepository, Repository } from "typeorm";
import User from "../../entities/User";
import IUsersRepository, {IUserDTO} from '../IUsersRepository'
import bcrypt from 'bcryptjs'


class UserRepository implements IUsersRepository{
    private UserRepository:Repository<User>

    constructor(){
        this.UserRepository = getRepository(User)
    }

    async create({name,email,driver_license,password,username}:IUserDTO){
        const passeordCripto = await bcrypt.hash(password,10)
        const user = this.UserRepository.create({
            name,
            email,
            password: passeordCripto,
            driver_license,
            username
        })

        await this.UserRepository.save(user)
    }
}

export default UserRepository