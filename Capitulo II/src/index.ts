import express from 'express'
import Routes from './routes/routes'


const app = express()
app.use(express.json())
app.use(Routes)

app.listen(3333,() => {
    console.log("api iniciada na porta 3333")
})
