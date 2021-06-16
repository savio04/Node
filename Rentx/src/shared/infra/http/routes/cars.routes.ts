import {  Router } from 'express'
import CarsController from '../../../../modules/cars/useCases/CreateCar/CreateCarCrontroller'
import ListAvailableCarsController from '../../../../modules/cars/useCases/ListAvailableCars/ListAvailableCarsController'
import ensureAdmin from '../middlewares/ensureAdmin'
import ensureAutheticaded from '../middlewares/ensureAtheticated'

const CarsRoutes = Router()

const carsController = new CarsController
const listaAvailableCars = new ListAvailableCarsController

CarsRoutes.post('/',ensureAutheticaded,ensureAdmin,carsController.handle)

CarsRoutes.get('/available',listaAvailableCars.handle)

export default CarsRoutes
