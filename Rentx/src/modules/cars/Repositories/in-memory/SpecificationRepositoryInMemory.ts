import Specification from "../../infra/typeorm/entities/Specification";
import IspecificationRepository from "../ISpecificationRepository";


class SpecificationRepositoryInMemory implements IspecificationRepository{

    private specificationRepository:Specification[]

    constructor(){
        this.specificationRepository = []
    }

    async create(name:string, descirption:string){
        const spec = new Specification

        Object.assign(spec, {
            name,
            descirption
        })

        this.specificationRepository.push(spec)

        return spec
    }

    async seeAll(){
        return this.specificationRepository
    }

    async findByName(name:string){
        const specification = this.specificationRepository.find(spec => spec.name === name)

        return specification
    }

    async findById(ids:string[]){
        const specs = this.specificationRepository.filter(spec => ids.includes(spec .id))
      
        return specs
    }
}

export default SpecificationRepositoryInMemory