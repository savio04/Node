import { getRepository, Repository } from 'typeorm'
import Specification from '../entities/Specification'
import IspecificationRepository from '../../../Repositories/ISpecificationRepository'


class SpecificationRepository implements IspecificationRepository{

    private SpecificationRepository:Repository<Specification>
    
    constructor(){
        this.SpecificationRepository = getRepository(Specification)
    }

    public async create(name:string, description:string){
        const specification =  this.SpecificationRepository.create({
            name,
            description
        })

        await this.SpecificationRepository.save(specification)

        return specification
    }

    public async seeAll(){
        const specifications = await this.SpecificationRepository.find()

        return specifications
    }

    public async findByName(name:string){
        const specificationExisting = await this.SpecificationRepository.findOne({
            name
        })

        return specificationExisting
    }

}

export default SpecificationRepository
