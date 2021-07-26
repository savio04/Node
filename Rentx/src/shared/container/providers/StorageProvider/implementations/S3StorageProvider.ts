import IStorageProvider from "../IStorageProvider";
import { S3 } from 'aws-sdk'
import path from 'path'
import fs from 'fs'
import upload from "../../../../../config/upload";

class S3StorageProvider implements IStorageProvider{
    private client: S3

    constructor(){
        this.client = new S3({
            region: process.env.AWS_BUCKET_REGION
        })
    }
    
    async save(file: string, folder: string): Promise<string> {
        const originalName = path.resolve(upload.tempFolder, file)

    }
    async delete(file: string, folder: string): Promise<void> {

    }

}

export default S3StorageProvider