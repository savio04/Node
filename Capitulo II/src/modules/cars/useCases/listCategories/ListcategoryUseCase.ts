import ICategoryRepository from "../../Repositories/Implementations/CategoryRepositpry"


class ListCategoryUseCase{
    private CategoryRepository:ICategoryRepository
    
    constructor(CategoryRepository:ICategoryRepository){
        this.CategoryRepository = CategoryRepository
    }

    execute(){
        return this.CategoryRepository.seeAll()
    }
}


export default ListCategoryUseCase