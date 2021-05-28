import { container } from 'tsyringe'
import ICategoryRepository from '../../modules/cars/Repositories/ICategoryRepository' 
import CategoryRepository from '../../modules/cars/Repositories/Implementations/CategoryRepositpry'

//ICategory
container.registerSingleton<ICategoryRepository>(
    "categoryRepository",
    CategoryRepository
)