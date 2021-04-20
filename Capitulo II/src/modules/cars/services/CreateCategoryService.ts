import CategoryRepository from '../Repositories/CategoryRepositpry'

interface RequestProps{
    name:string
    description:string
}

const Repository = new CategoryRepository
class CreateCategoryService{
    public execute({name,description}:RequestProps){
        const Existingcategory = Repository.findByName(name)
    
        if(Existingcategory){
            throw new Error('Already existing category')
        }

        const category = Repository.create({
            name,
            description,
            created_at: new Date()
        })

        return category
    }

    public seeAll(){
        const categories = Repository.seeAll()

        return categories
    }
}

export default CreateCategoryService

