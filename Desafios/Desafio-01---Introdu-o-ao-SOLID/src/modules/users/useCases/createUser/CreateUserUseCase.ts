import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({name, email}: IRequest){
    const userExiting = this.usersRepository.findByEmail(email)

    if(userExiting){
      throw new Error('user existing')
    }

    const user =  this.usersRepository.create({
      name,
      email
    })

    return user
  }
}

export { CreateUserUseCase };
