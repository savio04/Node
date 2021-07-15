import UserToken from "../infra/typeorm/entities/UserToken";

export interface IUserTokenDTO{
    user_id:string
    expires_date: Date
    refresh_token: string
}

interface IUserTokenRepository{
    create(data: IUserTokenDTO):Promise<UserToken>   
    findByUserIdAndRefreshToken(user_id:string,token:string):Promise<UserToken>
    deleteById(id:string):Promise<void>
}

export default IUserTokenRepository