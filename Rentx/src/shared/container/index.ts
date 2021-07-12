import { container } from 'tsyringe'
import './providers'
import UserRepository from '../../modules/accounts/infra/typeorm/repositories/UserRepository'
import IUsersRepository from '../../modules/accounts/Repositories/IUsersRepository'
import ICategoryRepository from '../../modules/cars/Repositories/ICategoryRepository' 
import CategoryRepository from '../../modules/cars/infra/typeorm/repositories/CategoryRepository'
import SpecificationRepository from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository'
import IspecificationRepository from '../../modules/cars/Repositories/ISpecificationRepository'
import ICarsRepository from '../../modules/cars/Repositories/ICarsRepository'
import CarsRepository from '../../modules/cars/infra/typeorm/repositories/CarsRepository'
import ICarsImageRepository from '../../modules/cars/Repositories/ICarsImageRepository'
import CarsImageRespository from '../../modules/cars/infra/typeorm/repositories/CarsImageRepository'
import IRentalsRepository from '../../modules/rentals/Repositories/IRentalsRepository'
import RentalsRepository from '../../modules/rentals/infra/typeorm/Repositories/RentalsRepository'
import IUserTokenRepository from '../../modules/accounts/Repositories/IUserTokenRepository'
import UserTokenRepository from '../../modules/accounts/infra/typeorm/repositories/UserTokenRepository'

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

//Cars
container.registerSingleton<ICarsRepository>(
    "carsRepository",
    CarsRepository
)

//CarsImage
container.registerSingleton<ICarsImageRepository>(
    'carsImageRepository',
    CarsImageRespository
)

//Rentals
container.registerSingleton<IRentalsRepository>(
    'rentalRepository',
    RentalsRepository
)

//Refresh_token
container.registerSingleton<IUserTokenRepository>(
    'userTokenRepository',
    UserTokenRepository
)