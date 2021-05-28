import IspecificationRepository from "../../Repositories/ISpecificationRepository"
import { inject,injectable } from 'tsyringe'

interface RequestProps{
    name:string
    description:string
}

@injectable()
class CreateSpecificationUseCase{
    constructor(
        @inject('specificationRepository')
        private SpecificationRepository:IspecificationRepository
    ){}

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