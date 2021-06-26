import AppError from "../../../../shared/errors/AppError"
import UserRepositoryinMemory from "../../Repositories/in-memory/UserRepositoryinMemory"
import { IUserDTO } from "../../Repositories/IUsersRepository"
import CreateUserUseCase from "../CreateUser/CreateUserUseCase"
import AutheticateUserUseCase from "./AutheticateUserUseCase"


let userRepositoryinMemory:UserRepositoryinMemory
let autheticateUseCase:AutheticateUserUseCase
let createUserUseCase:CreateUserUseCase

describe("Autheticate User", () => {
    beforeEach(() => {
        userRepositoryinMemory = new UserRepositoryinMemory
        autheticateUseCase = new AutheticateUserUseCase(userRepositoryinMemory)
        createUserUseCase = new CreateUserUseCase(userRepositoryinMemory)
    })

    it("should be able to autheticate an user", async () => {
        const user:IUserDTO = {
            name: 'name test',
            email: 'test2gmail.com', 
            password: '123454',
            driver_license: '151511545'
        }

        await createUserUseCase.execute(user)

        const result = await autheticateUseCase.execute({
            email: 'test2gmail.com',
            password: '123454'
        })

        expect(result).toHaveProperty('token')
    })

    it("should not be able to autheticate an noneexisting user", () => {
        expect(async () => {
            await autheticateUseCase.execute({
                email: "user.email",
                password: "user.password"
            })    
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to autheticate with incorrect password", () => {
        expect(async () => {
            const user:IUserDTO = {
                name: 'jose',
                email: 'jose@gmail.com', 
                password: '123454',
                driver_license: '151511545',
            }

            await createUserUseCase.execute(user)

            await autheticateUseCase.execute({
                email:user.email,
                password:"789986565"
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})