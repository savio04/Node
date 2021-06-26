import { Router } from 'express'
import CreateRentalController from '../../../../modules/rentals/UseCases/CreateRental/CreateRentalController'
import ensureAutheticaded from '../middlewares/ensureAtheticated'
const RentalRoute = Router()

const rentalController = new CreateRentalController

RentalRoute.post('/',
    ensureAutheticaded,
    rentalController.handle
)

export default RentalRoute