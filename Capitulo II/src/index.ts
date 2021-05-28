import 'reflect-metadata'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import './database'
import './shared/container'
import Routes from './routes/routes'


const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerFile))
app.use(Routes)

app.listen(3333,() => {
    console.log("api iniciada na porta 3333")
})
