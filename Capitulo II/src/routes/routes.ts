import express from 'express'
import categoriesRoutes from './category.routes'
import SpacificationRoute from './spacification.routes'
import AccountRoute from './accounts.routes'
import AutheticateRoute from './autheticate.routes'
const Routes = express.Router()

Routes.use('/categories', categoriesRoutes)
Routes.use('/specification', SpacificationRoute)
Routes.use('/sign-up', AccountRoute)
Routes.use('/sign-in', AutheticateRoute)

export default Routes
