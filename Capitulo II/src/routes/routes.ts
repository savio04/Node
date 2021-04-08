import express from 'express'
import categoriesRoutes from './category.routes'
const Routes = express.Router()

Routes.use("/categories", categoriesRoutes)

export default Routes
