import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../../swagger.json'
import cors from 'cors'

import createconnection from '../typeorm'
import '../../container'
import Routes from './routes/routes'
import AppError from '../../errors/AppError'


createconnection()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerFile))
app.use(Routes)

app.use((err:Error, request:Request, response:Response, next:NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            error: `${err.message}`
        })
    }

    return response.status(500).json({
        error:`${err.message}`
    })
})

export default app
