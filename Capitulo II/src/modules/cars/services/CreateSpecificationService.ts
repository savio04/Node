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

        const specification = Repository.create({
            name,
            description,
            created_at: new Date()
        })

        return specification
    }
}

export default CreateSpecificationService
