import User from "../entities/User";

export interface IUserDTO{
    name:string
    email:string
    driver_license:string
    password:string
}

interface IUsersRepository{
    create({name,email,driver_license,password}:IUserDTO):Promise<void>
    findByEmail(email:string):Promise<User | undefined>
    findById(id:string):Promise<User | undefined>
}

export default IUsersRepository