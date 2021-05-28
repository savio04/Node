
export interface IUserDTO{
    name:string
    username:string
    email:string
    driver_license:string
    password:string
}

interface IUsersrepository{
    create({name,username,email,driver_license,password}:IUserDTO):Promise<void>
}

export default IUsersrepository