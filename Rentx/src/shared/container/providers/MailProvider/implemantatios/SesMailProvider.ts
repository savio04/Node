import 'dotenv/config'
import nodemailer, { Transporter } from "nodemailer";
import IMailProvider from "../IMailProvider";
import handlebars from "handlebars";
import aws from "aws-sdk";
import fs from "fs";
class SesMailProvider implements IMailProvider {
    private Client: Transporter;
    constructor() {
        this.Client = nodemailer.createTransport({
            SES: new aws.SES({
                apiVersion: "2010-12-01",
                region: process.env.AWS_BUCKET_REGION,
            }),
        });
    }

    async sendEmail(to: string, subject: string, variables: any, path: string) {
        const templateFileContent = fs.readFileSync(path).toString("utf-8");
        const templateParse = handlebars.compile(templateFileContent);
        const templateHTML = templateParse(variables);

        await this.Client.sendMail({
            to,
            from: "Rentx <rentx@amufumbar.com>",
            subject,
            html: templateHTML,
        });
    }
}

export default SesMailProvider;
