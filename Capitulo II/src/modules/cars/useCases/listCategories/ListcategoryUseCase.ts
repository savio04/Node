import ICategoryRepository from "../../Repositories/Implementations/CategoryRepositpry"


class ListCategoryUseCase{
    private CategoryRepository:ICategoryRepository
    
    constructor(CategoryRepository:ICategoryRepository){
        this.CategoryRepository = CategoryRepository
    }

    async execute(){
        const categories = await this.CategoryRepository.seeAll()

        return categories
    }
}


export default ListCategoryUseCase