import { container } from 'tsyringe'
import IDateProvider from './DateProvider/IDateProvider'
import DayJsDateProvider from './DateProvider/implemantations/DayjsDateProvider'

container.registerSingleton<IDateProvider>(
    'dateProvider',
    DayJsDateProvider
)