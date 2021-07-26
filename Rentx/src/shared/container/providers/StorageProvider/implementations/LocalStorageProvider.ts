import IStorageProvider from "../IStorageProvider";
import fs from 'fs'
import path from 'path'
import upload from "../../../../../config/upload";
import deleFile from "../../../../../utils/file";

class LocalStorageProvider implements IStorageProvider {
    async save(file:string, folder: string){
        await fs.promises.rename(
            path.resolve(upload.tempFolder,file),
            path.resolve(`${upload.tempFolder}/${folder}`, file)
        )

        return file
    }

    async delete(file:string, folder: string){
        const filename = path.resolve(`${upload.tempFolder}/${folder}`, file)

        await deleFile(filename)
    }
}

export default LocalStorageProvider;
