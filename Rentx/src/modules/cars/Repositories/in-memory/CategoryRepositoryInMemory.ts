import Category from "../../infra/typeorm/entities/Category";
import ICategoryRepository, { Propscategories } from "../ICategoryRepository";
import { v4 as uuidv4 } from 'uuid'

class CategoryRepositoryInMemory implements ICategoryRepository{
    private categories:Category[]

    constructor(){
        this.categories = []
    }

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
            id:uuidv4(),
            name,
            description
        })

        this.categories.push(newCategory)
    }
}

export default CategoryRepositoryInMemory