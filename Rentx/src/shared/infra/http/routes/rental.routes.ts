import { Router } from 'express'
import CreateRentalController from '../../../../modules/rentals/UseCases/CreateRental/CreateRentalController'
import DevolutionRentalController from '../../../../modules/rentals/UseCases/DevolutionRental/DevolutionRentalController'
import ListRentalsByUserController from '../../../../modules/rentals/UseCases/ListRentalsByUser/ListRentalsByUserController'
import ensureAutheticaded from '../middlewares/ensureAtheticated'
const RentalRoute = Router()

const rentalController = new CreateRentalController
const devolutionController = new DevolutionRentalController
const listRentalsByUserController = new ListRentalsByUserController

RentalRoute.post('/',
    ensureAutheticaded,
    rentalController.handle
)

RentalRoute.post(
    '/devolution/:id',
    ensureAutheticaded,
    devolutionController.handle
)

RentalRoute.get(
    '/',
    ensureAutheticaded,
    listRentalsByUserController.handle
)

export default RentalRoute