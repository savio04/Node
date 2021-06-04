import Category from "../../entities/Category";
import ICategoryRepository, { Propscategories } from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository{
    categories:Category[] = []

    async findByName(name:string){
        const category = this.categories.find(category => category.name === name)

        return category
    }

    async seeAll(){
        return this.categories
    }

    async create({name,description}:Propscategories){
        const newCategory = new Category

        Object.assign(newCategory,{
            name,
            description
        })

        this.categories.push(newCategory)
    }
}

export default CategoryRepositoryInMemory