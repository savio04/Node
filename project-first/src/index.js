import express, { Router } from 'express'
const app = express()

app.use(express.json())

app.get('/', (request,response) => {
    return response.json({
        message: 'ola'
    })
})

app.post('/create_account', (request,response) => {
    const response_data =  request.body
    return response.json(response_data)
})


app.listen(3333, () => {
    console.log('Api iniciada...')
})