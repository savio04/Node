import express from 'express'
import specificationController from '../modules/cars/useCases/CreateSpecification'

const SpecificationRoute = express.Router()

SpecificationRoute.post('/',(request,response) => {
    return specificationController().handle(request,response)
})
export default SpecificationRoute
