import express from 'express'
import CreateSpecificationController from '../modules/cars/useCases/CreateSpecification/CreateSpecificationController'

const SpecificationRoute = express.Router()

const specificationController = new CreateSpecificationController
SpecificationRoute.post('/',specificationController.handle)
export default SpecificationRoute
