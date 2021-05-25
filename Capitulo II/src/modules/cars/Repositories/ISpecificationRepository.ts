import Specification from "../entities/Specification";

interface IspecificationRepository{
    findByName(name:string):Specification | undefined
    seeAll():Specification[]
    create(name:string, descirption:string,created_at:Date):Specification
}

export default IspecificationRepository