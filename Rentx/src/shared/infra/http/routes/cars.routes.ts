import {  Router } from 'express'
import CarsController from '../../../../modules/cars/useCases/CreateCar/CreateCarCrontroller'

const CarsRoutes = Router()

const carsController = new CarsController
CarsRoutes.post('/',carsController.handle)

export default CarsRoutes
