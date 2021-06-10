import { container } from 'tsyringe'
import UserRepository from '../../modules/accounts/infra/typeorm/repositories/UserRepository'
import IUsersRepository from '../../modules/accounts/Repositories/IUsersRepository'
import ICategoryRepository from '../../modules/cars/Repositories/ICategoryRepository' 
import CategoryRepository from '../../modules/cars/infra/typeorm/repositories/CategoryRepository'
import SpecificationRepository from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository'
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
container.registerSingleton<IUsersRepository>(
    "userRepository",
    UserRepository
)