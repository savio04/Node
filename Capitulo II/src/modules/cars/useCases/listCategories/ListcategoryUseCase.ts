import ICategoryRepository from "../../Repositories/CategoryRepositpry"


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