import fs from 'fs'
import csvParse from 'csv-parse'

class ImportCategoryUseCase{
    execute(file:Express.Multer.File){
        const stream = fs.createReadStream(file.path)

        const ParseFile = csvParse()

        stream.pipe(ParseFile)

        ParseFile.on('data', (line) => {
            console.log(line)
        })
    }
}

export default ImportCategoryUseCase