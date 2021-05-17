import CategoryRepository from '../../Repositories/CategoryRepositpry'

interface RequestProps{
    name:string
    description:string
}

class CreateCategoryUseCase{

    private Repository

    constructor(Repository: CategoryRepository){
        this.Repository = Repository
    }

    public execute({name,description}:RequestProps){
        const Existingcategory = this.Repository.findByName(name)
    
        if(Existingcategory){
            throw new Error('Already existing category')
        }

        const category = this.Repository.create({
            name,
            description,
            created_at: new Date()
        })

        return category
    }

    public seeAll(){
        const categories = this.Repository.seeAll()

        return categories
    }
}

export default CreateCategoryUseCase

