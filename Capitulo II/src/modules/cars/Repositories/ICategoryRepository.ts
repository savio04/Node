import Category from '../model/Category'

interface Propscategories{
    name:string
    description:string
    created_at:Date
}

interface ICategoryRepository{
    findByName(name:string):Category | undefined
    seeAll():Category[]
    create({name, description,created_at}: Propscategories):Category
}

export {Propscategories}
export default ICategoryRepository