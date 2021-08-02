import { container } from "tsyringe";
import IMailProvider from "./IMailProvider";
import EtherealMailProvider from "./implemantatios/EtherealMailProvider";
import SesMailProvider from "./implemantatios/SesMailProvider";

const mailProvider = {
    etheral: container.resolve(EtherealMailProvider),
    ses: container.resolve(SesMailProvider)
}

container.registerInstance<IMailProvider>(
    'mailProvider',
    mailProvider['ses']
)