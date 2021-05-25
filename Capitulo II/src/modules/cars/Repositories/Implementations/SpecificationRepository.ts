import Specification from '../../entities/Specification'
import IspecificationRepository from '../ISpecificationRepository'


class SpecificationRepository implements IspecificationRepository{

    private Specifications:Specification[]
    
    constructor(){
        this.Specifications = []
    }
    public create(name:string, description:string, created_at:Date){
        const specification = new Specification(name,description, created_at)

        this.Specifications.push(specification)

        return specification
    }

    public seeAll(){
        return this.Specifications
    }

    public findByName(name:string){
        const specificationExisting = this.Specifications.find(specification => specification.name === name)

        return specificationExisting
    }

}

export default SpecificationRepository
