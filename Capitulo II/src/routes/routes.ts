import express from 'express'
import categoriesRoutes from './category.routes'
import SpacificationRoute from './spacification.routes'
const Routes = express.Router()

Routes.use("/categories", categoriesRoutes)
Routes.use("/spacification", SpacificationRoute)

export default Routes
