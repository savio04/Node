import Specification from "../infra/typeorm/entities/Specification";

interface IspecificationRepository{
    findByName(name:string):Promise<Specification | undefined>
    seeAll():Promise<Specification[]>
    create(name:string, descirption:string):Promise<Specification>
}

export default IspecificationRepository