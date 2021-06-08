import User from "../../entities/User";
import IUsersRepository, { IUserDTO } from "../IUsersRepository";
import { v4 as uuidv4 } from 'uuid'

class UserRepositoryinMemory implements IUsersRepository{
    
    private Users:User[] = []

    async create({email,password,driver_license,name}:IUserDTO){
        const user = new User

        Object.assign(user, {
            name,
            email,
            password,
            driver_license,
            id: uuidv4()
        })

        this.Users.push(user)
    }

    async findByEmail(email:string){
        const user = this.Users.find(user => user.email === email)

        return user
    }

    async findById(id:string){
        const user = this.Users.find(user => user.id === id)

        return user
    }
}

export default UserRepositoryinMemory