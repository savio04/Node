import IspecificationRepository from "../../Repositories/ISpecificationRepository"

interface RequestProps{
    name:string
    description:string
}

class CreateSpecificationUseCase{
    private SpecificationRepository:IspecificationRepository

    constructor(SpecificationRepository:IspecificationRepository){
        this.SpecificationRepository = SpecificationRepository
    }

    public async execute({name,description}:RequestProps){
        const specificationExisting = await this.SpecificationRepository.findByName(name)

        if(specificationExisting){
            throw new Error("specification alreay exisiting")
        }
        const specification = await this.SpecificationRepository.create(
            name,
            description
        )

        return specification
    }

}

export default CreateSpecificationUseCase