import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User()

    Object.assign(user,{
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.users.push(user)

    return user
  }

  findById(id: string): User | undefined {
    const userexiting = this.users.find(user => user.id === id)

    return userexiting
  }

  findByEmail(email: string): User | undefined {
    const useEmailExisting = this.users.find(user => user.email === email)

    return useEmailExisting
  }

  turnAdmin(receivedUser: User): User {
    if(!receivedUser.admin){
      receivedUser.admin = true
    }

    return receivedUser
  }

  list(): User[] {
    return this.users
  }
}

export { UsersRepository };
