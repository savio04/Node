import { inject, injectable } from "tsyringe"
import ICategoryRepository from "../../Repositories/Implementations/CategoryRepositpry"

@injectable()
class ListCategoryUseCase{
    
    constructor(
        @inject('specificationRepository')
        private CategoryRepository:ICategoryRepository
    ){}

    async execute(){
        const categories = await this.CategoryRepository.seeAll()

        return categories
    }
}


export default ListCategoryUseCase