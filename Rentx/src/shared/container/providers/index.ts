import 'dotenv/config'
import { container } from 'tsyringe'
import IDateProvider from './DateProvider/IDateProvider'
import DayJsDateProvider from './DateProvider/implemantations/DayjsDateProvider'
import IMailProvider from './MailProvider/IMailProvider'
import EtherealMailProvider from './MailProvider/implemantatios/EtherealMailProvider'
import LocalStorageProvider from './StorageProvider/implementations/LocalStorageProvider'
import S3StorageProvider from './StorageProvider/implementations/S3StorageProvider'
import IStorageProvider from './StorageProvider/IStorageProvider'

container.registerSingleton<IDateProvider>(
    'dateProvider',
    DayJsDateProvider
)

container.registerInstance<IMailProvider>(
    'mailProvider',
    new EtherealMailProvider
)

const diskStorage = {
    local: LocalStorageProvider,
    s3: S3StorageProvider
}

const disk = process.env.disk as string

container.registerSingleton<IStorageProvider>(
    'storageProvider',
    diskStorage[disk]
)