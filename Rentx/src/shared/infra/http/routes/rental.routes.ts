import { Router } from 'express'
import CreateRentalController from '../../../../modules/rentals/UseCases/CreateRental/CreateRentalController'
import DevolutionRentalController from '../../../../modules/rentals/UseCases/DevolutionRental/DevolutionRentalController'
import ensureAutheticaded from '../middlewares/ensureAtheticated'
const RentalRoute = Router()

const rentalController = new CreateRentalController
const devolutionController = new DevolutionRentalController

RentalRoute.post('/',
    ensureAutheticaded,
    rentalController.handle
)

RentalRoute.post(
    '/devolution/:id',
    ensureAutheticaded,
    devolutionController.handle
)

export default RentalRoute