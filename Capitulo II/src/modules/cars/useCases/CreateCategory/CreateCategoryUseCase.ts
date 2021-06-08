import ICategoryRepository from '../../Repositories/ICategoryRepository'
import AppError from '../../../../errors/AppError'
import { inject, injectable } from 'tsyringe'

interface RequestProps{
    name:string
    description:string
}

@injectable()
class CreateCategoryUseCase{

    
    constructor(
        @inject('categoryRepository')
        private Repository:ICategoryRepository
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
}

export default CreateCategoryUseCase

