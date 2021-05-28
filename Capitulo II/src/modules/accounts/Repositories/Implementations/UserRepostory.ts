import { getRepository, Repository } from "typeorm";
import User from "../../entiites/User";
import {IUserDTO} from '../IUsersRepository'
import bcrypt from 'bcryptjs'


class UserRepository{
    constructor(private UserRepository:Repository<User>){
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