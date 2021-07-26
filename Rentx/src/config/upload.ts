import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const tempFolder = path.resolve(__dirname, "..", "..", "temp")

export default {
    tempFolder,
    storage: multer.diskStorage({
        destination: tempFolder,
        filename: (request,file,callback) => {
            const fileHash = crypto.randomBytes(16).toString("hex")
            const filename = `${fileHash}-${file.originalname}`

            return callback(null,filename)
        }
    })
}