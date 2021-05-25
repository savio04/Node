import CategoryRepository from '../../Repositories/Implementations/CategoryRepositpry'

interface RequestProps{
    name:string
    description:string
}

class CreateCategoryUseCase{

    private Repository

    constructor(Repository: CategoryRepository){
        this.Repository = Repository
    }

    public async execute({name,description}:RequestProps){
        const Existingcategory = await this.Repository.findByName(name)
    
        if(Existingcategory){
            throw new Error('Already existing category')
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

