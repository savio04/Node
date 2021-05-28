import { container } from 'tsyringe'
import ICategoryRepository from '../../modules/cars/Repositories/ICategoryRepository' 
import CategoryRepository from '../../modules/cars/Repositories/Implementations/CategoryRepositpry'
import SpecificationRepository from '../../modules/cars/Repositories/Implementations/SpecificationRepository'
import IspecificationRepository from '../../modules/cars/Repositories/ISpecificationRepository'

//ICategory
container.registerSingleton<ICategoryRepository>(
    "categoryRepository",
    CategoryRepository
)

//Specification
container.registerSingleton<IspecificationRepository>(
    "specificationRepository",
    SpecificationRepository
)