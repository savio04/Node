import express from 'express'
const RouteAccount = express.Router()

RouteAccount.post('/create_account', (request,response) => {
    const response_data =  request.body

    console.log(response_data.data)
})


export default RouteAccount