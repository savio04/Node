import { container } from "tsyringe";
import IDateProvider from "./IDateProvider";
import DayJsDateProvider from "./implemantations/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
    'dateProvider',
    DayJsDateProvider
)
