import { container } from 'tsyringe'
import UserRepository from '../../modules/accounts/Repositories/Implementations/UserRepostory'
import IUsersrepository from '../../modules/accounts/Repositories/IUsersRepository'
import ICategoryRepository from '../../modules/cars/Repositories/ICategoryRepository' 
import CategoryRepository from '../../modules/cars/Repositories/Implementations/CategoryRepositpry'
import SpecificationRepository from '../../modules/cars/Repositories/Implementations/SpecificationRepository'
import IspecificationRepository from '../../modules/cars/Repositories/ISpecificationRepository'

//Category
container.registerSingleton<ICategoryRepository>(
    "categoryRepository",
    CategoryRepository
)

//Specification
container.registerSingleton<IspecificationRepository>(
    "specificationRepository",
    SpecificationRepository
)

//User
container.registerSingleton<IUsersrepository>(
    "userRepository",
    UserRepository
)