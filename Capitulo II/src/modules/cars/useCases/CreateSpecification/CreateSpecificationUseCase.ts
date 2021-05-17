import SpecificationRepository from "../../Repositories/Implementations/SpecificationRepository"

interface RequestProps{
    name:string
    description:string
}

class CreateSpecificationUseCase{
    private SpecificationRepository:SpecificationRepository

    constructor(SpecificationRepository:SpecificationRepository){
        this.SpecificationRepository = SpecificationRepository
    }

    public execute({name,description}:RequestProps){
        const specificationExisting = this.SpecificationRepository.findByName(name)

        if(specificationExisting){
            throw new Error("specification alreay exisiting")
        }

        const created_at = new Date()
        const specification = this.SpecificationRepository.create(
            name,
            description,
            created_at)

        return specification
    }

}

export default CreateSpecificationUseCase