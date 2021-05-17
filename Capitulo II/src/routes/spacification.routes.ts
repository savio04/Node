import express from 'express'
import CreateSpecificationService from '../modules/cars/services/CreateSpecificationService'

const SpecificationRoute = express.Router()

SpecificationRoute.post('/',(request,response) => {
    const {name,description} = request.body
    const SpacificationService = new CreateSpecificationService

    try{
        const spacification = SpacificationService.execute({
            name,
            description
        })

        return response.status(201).json(spacification)
    }catch(err){
        return response.status(400).json({
            erro: `${err.message}`
        })
    }

})
export default SpecificationRoute
