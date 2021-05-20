import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExiting = this.usersRepository.findById(user_id)

    if(!userExiting){
      throw new Error('Not existing user')
    }

    if(!userExiting.admin){
      throw new Error('Not is admin')
    }
    
    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
