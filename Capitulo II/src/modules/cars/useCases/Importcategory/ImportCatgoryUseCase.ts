import fs from 'fs'
import csvParse from 'csv-parse'
import ICategoryRepository from '../../Repositories/ICategoryRepository'


interface Importcategories{
    name:string
    description:string
}

class ImportCategoryUseCase{
    private CategoryRepository:ICategoryRepository

    constructor(CategoryRepository:ICategoryRepository){
        this.CategoryRepository = CategoryRepository
    }

    loadCategories(file:Express.Multer.File):Promise<Importcategories[]>{
        return new Promise((resolve,reject) => {
            const stream = fs.createReadStream(file.path)
            const categories: Importcategories[] = []

            const ParseFile = csvParse()

            stream.pipe(ParseFile)

            ParseFile.on('data',(line) => {
                const [name,description] = line

                categories.push({
                    name,
                    description
                })
            })
            .on('end', () => {
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on('error', (err) => {
                reject(err)
            })
            
        })
    }
    async execute(file:Express.Multer.File){
        const categories = await this.loadCategories(file)

        for(const category of categories){
            const {name,description} = category

            const existing = await this.CategoryRepository.findByName(name)

            if(!existing){
                this.CategoryRepository.create({
                    name,
                    description
                })
            }
        }
    }
}

export default ImportCategoryUseCase