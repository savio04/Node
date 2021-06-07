import ICategoryRepository from '../../Repositories/Implementations/CategoryRepository'
import { inject, injectable } from 'tsyringe'
import AppError from '../../../../errors/AppError'

interface RequestProps{
    name:string
    description:string
}

@injectable()
class CreateCategoryUseCase{

    constructor(
        @inject('categoryRepository')
        private Repository: ICategoryRepository
    ){}

    public async execute({name,description}:RequestProps){
        const Existingcategory = await this.Repository.findByName(name)
    
        if(Existingcategory){
            throw new AppError('Already existing category')
        }

        await this.Repository.create({
            name,
            description,
        })
    }

    public async seeAll(){
        const categories = await this.Repository.seeAll()

        return categories
    }
}

export default CreateCategoryUseCase

