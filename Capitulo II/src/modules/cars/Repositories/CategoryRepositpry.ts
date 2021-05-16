import Category from '../model/Category'
import ICategoryRepository from './ICategoryRepository'
import { Propscategories } from './ICategoryRepository'


class CategoryRepository implements ICategoryRepository{
    private categories:Category[]

    constructor(){
        this.categories = []
    }


    public create({ name, description, created_at }:Propscategories){
        const category = new Category(name,description, created_at)

        this.categories.push(category)

        return category
    }

    public seeAll(){
        return this.categories
    }

    public findByName(name:string){
        const category = this.categories.find(category => category.name === name)

        return category
    }
}

export default CategoryRepository
