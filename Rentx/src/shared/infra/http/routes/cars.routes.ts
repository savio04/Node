import {  Router } from 'express'
import CarsController from '../../../../modules/cars/useCases/CreateCar/CreateCarCrontroller'
import ensureAdmin from '../middlewares/ensureAdmin'
import ensureAutheticaded from '../middlewares/ensureAtheticated'

const CarsRoutes = Router()

const carsController = new CarsController
CarsRoutes.post('/',ensureAutheticaded,ensureAdmin,carsController.handle)

export default CarsRoutes
