import express from 'express'
import CreateSpecificationController from '../../../../modules/cars/useCases/CreateSpecification/CreateSpecificationController'
import ensureAdmin from '../middlewares/ensureAdmin'
import ensureAutheticaded from '../middlewares/ensureAtheticated'

const SpecificationRoute = express.Router()

const specificationController = new CreateSpecificationController
SpecificationRoute.post(
    '/',
    ensureAutheticaded,
    ensureAdmin,
    specificationController.handle
    )
export default SpecificationRoute
