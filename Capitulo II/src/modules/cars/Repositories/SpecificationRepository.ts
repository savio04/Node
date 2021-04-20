import Specification from '../model/Specification'

interface SpecificationProps{
    name:string
    description:string
    created_at:Date
}

class SpecificationRepository{

    private Specifications:Specification[]
    
    constructor(){
        this.Specifications = []
    }
    public create({ name, description, created_at }:SpecificationProps){
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
