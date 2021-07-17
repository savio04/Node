import DayJsDateProvider from "../../../../shared/container/providers/DateProvider/implemantations/DayjsDateProvider";
import AppError from "../../../../shared/errors/AppError";
import UserRepositoryinMemory from "../../Repositories/in-memory/UserRepositoryinMemory";
import UsersTokenRepositoryInMemory from "../../Repositories/in-memory/UsersTokenRepositoryInMemory";
import { IUserDTO } from "../../Repositories/IUsersRepository";
import CreateUserUseCase from "../CreateUser/CreateUserUseCase";
import AutheticateUserUseCase from "./AutheticateUserUseCase";

let userRepositoryinMemory: UserRepositoryinMemory;
let autheticateUseCase: AutheticateUserUseCase;
let usersTokenReposiotryInMemory: UsersTokenRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let dateProvider: DayJsDateProvider;

describe("Autheticate User", () => {
    beforeEach(() => {
        userRepositoryinMemory = new UserRepositoryinMemory();
        usersTokenReposiotryInMemory = new UsersTokenRepositoryInMemory();
        dateProvider = new DayJsDateProvider();
        autheticateUseCase = new AutheticateUserUseCase(
            userRepositoryinMemory,
            usersTokenReposiotryInMemory,
            dateProvider
        );
        createUserUseCase = new CreateUserUseCase(userRepositoryinMemory);
    });

    it("should be able to autheticate an user", async () => {
        const user: IUserDTO = {
            name: "name test",
            email: "test2gmail.com",
            password: "123454",
            driver_license: "151511545",
        };

        await createUserUseCase.execute(user);

        const result = await autheticateUseCase.execute({
            email: "test2gmail.com",
            password: "123454",
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to autheticate an none existing user", async () => {
        await expect(
            autheticateUseCase.execute({
                email: "user.email",
                password: "user.password",
            })
        ).rejects.toEqual(new AppError("Emaill or password incorrect!"));
    });

    it("should not be able to autheticate with incorrect password", async () => {
        const user: IUserDTO = {
            name: "jose",
            email: "jose@gmail.com",
            password: "123454",
            driver_license: "151511545",
        };

        await createUserUseCase.execute(user);
        await expect(
            autheticateUseCase.execute({
                email: user.email,
                password: "789986565",
            })
        ).rejects.toEqual(new AppError("Emaill or password incorrect!"));
    });
});
