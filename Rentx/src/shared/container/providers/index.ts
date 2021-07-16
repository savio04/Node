import { container } from 'tsyringe'
import IDateProvider from './DateProvider/IDateProvider'
import DayJsDateProvider from './DateProvider/implemantations/DayjsDateProvider'
import IMailProvider from './MailProvider/IMailProvider'
import EtherealMailProvider from './MailProvider/implemantatios/EtherealMailProvider'

container.registerSingleton<IDateProvider>(
    'dateProvider',
    DayJsDateProvider
)

container.registerInstance<IMailProvider>(
    'mailProvider',
    new EtherealMailProvider
)