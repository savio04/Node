import SpecificationRepository from '../Repositories/SpecificationRepository'

interface RequestProps{
    name:string
    description:string
}

const Repository = new SpecificationRepository

class CreateSpecificationService{
    public execute({name,description}:RequestProps){
        const specificationExisting = Repository.findByName(name)

        if(specificationExisting){
            throw new Error("specification alreay exisiting")
        }

        const created_at = new Date()
        const specification = Repository.create(
            name,
            description,
            created_at)

        return specification
    }
}

export default CreateSpecificationService
