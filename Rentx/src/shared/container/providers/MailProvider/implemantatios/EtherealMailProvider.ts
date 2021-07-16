import nodemailer, { Transporter } from 'nodemailer'
import IMailProvider from '../IMailProvider'

class EtherealMailProvider implements IMailProvider{
    private Client:Transporter
    constructor(){
        nodemailer.createTestAccount().then(account => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            })

            this.Client = transporter
        }).catch(err => console.error(err))
    }

    async sendEmail(to:string,subject:string,body:string){
        const message = await this.Client.sendMail({
            to,
            from: 'Rentx <noreplay@rentx.com.br>',
            subject,
            text: body,
            html: body
        })

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}

export default EtherealMailProvider