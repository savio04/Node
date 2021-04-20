import Category from '../model/Category'

interface ICategoryRepository{
    findByName(name:string):Category
    seeAll():Category[]
    create(name:string, descirption:string,created_at:Date):Category
}

export default ICategoryRepository