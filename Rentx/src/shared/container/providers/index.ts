import { container } from 'tsyringe'
import IDateProvider from './DateProvider/IDateProvider'
import DayJsDateProvider from './DateProvider/implemantations/DayjsDateProvider'
import IMailProvider from './MailProvider/IMailProvider'
import EtherealMailProvider from './MailProvider/implemantatios/EtherealMailProvider'
import LocalStorageProvider from './StorageProvider/implementations/LocalStorageProvider'
import IStorageProvider from './StorageProvider/IStorageProvider'

container.registerSingleton<IDateProvider>(
    'dateProvider',
    DayJsDateProvider
)

container.registerInstance<IMailProvider>(
    'mailProvider',
    new EtherealMailProvider
)

container.registerSingleton<IStorageProvider>(
    'storageProvider',
    LocalStorageProvider
)