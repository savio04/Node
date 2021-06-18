import {  Router } from 'express'
import CarsController from '../../../../modules/cars/useCases/CreateCar/CreateCarCrontroller'
import CreateCarSpecificationController from '../../../../modules/cars/useCases/CreateCarSpecification/CreateCarpecificationController'
import ListAvailableCarsController from '../../../../modules/cars/useCases/ListAvailableCars/ListAvailableCarsController'
import ensureAdmin from '../middlewares/ensureAdmin'
import ensureAutheticaded from '../middlewares/ensureAtheticated'

const CarsRoutes = Router()

const carsController = new CarsController
const listaAvailableCars = new ListAvailableCarsController
const createSpecificationCarController = new CreateCarSpecificationController

CarsRoutes.post('/',ensureAutheticaded,ensureAdmin,carsController.handle)

CarsRoutes.get('/available',listaAvailableCars.handle)

CarsRoutes.post(   
    '/specifications/:id',
    ensureAutheticaded,
    ensureAdmin,
    createSpecificationCarController.hadle,
    )
export default CarsRoutes
