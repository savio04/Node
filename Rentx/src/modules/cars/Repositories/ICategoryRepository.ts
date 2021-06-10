import Category from '../infra/typeorm/entities/Category'

interface Propscategories{
    name:string
    description:string
}

interface ICategoryRepository{
    findByName(name:string):Promise<Category | undefined>
    seeAll():Promise<Category[]>
    create({name, description}: Propscategories):Promise<void>
}

export {Propscategories}
export default ICategoryRepository