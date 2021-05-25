import { getRepository, Repository } from 'typeorm'
import Category from '../../entities/Category'
import ICategoryRepository from '../ICategoryRepository'
import { Propscategories } from '../ICategoryRepository'


class CategoryRepository implements ICategoryRepository{
    private categoryRepository:Repository<Category>

    constructor(){
        this.categoryRepository = getRepository(Category)
    }

    public async create({ name, description }:Propscategories){

        const category = this.categoryRepository.create({
            name,
            description,
        })

        await this.categoryRepository.save(category)
    }

    public async seeAll (){
        const categories = await this.categoryRepository.find()

        return categories
    }

    public async findByName(name:string){
        const category = await this.categoryRepository.findOne({name})

        return category
    }
}

export default CategoryRepository
