import User from "../infra/typeorm/entities/User";

export interface IUserDTO {
    name: string;
    email: string;
    driver_license: string;
    password: string;
    avatar?: string;
    id?: string;
}

interface IUsersRepository {
    create({
        name,
        email,
        driver_license,
        password,
        avatar,
        id,
    }: IUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
}

export default IUsersRepository;
