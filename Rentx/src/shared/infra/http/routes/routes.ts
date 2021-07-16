import express from 'express'
import categoriesRoutes from './category.routes'
import SpacificationRoute from './spacification.routes'
import AccountRoute from './accounts.routes'
import AutheticateRoute from './autheticate.routes'
import CarsRoutes from './cars.routes'
import RentalRoute from './rental.routes'
import PasswordRoute from './password.routes'
const Routes = express.Router()

Routes.use('/categories',categoriesRoutes)
Routes.use('/specification', SpacificationRoute)
Routes.use('/users', AccountRoute)
Routes.use('/sign-in', AutheticateRoute)
Routes.use('/cars', CarsRoutes)
Routes.use('/password', PasswordRoute)
Routes.use('/rentals', RentalRoute)

export default Routes
