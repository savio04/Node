import {  Router } from 'express'
import CarsController from '../../../../modules/cars/useCases/CreateCar/CreateCarCrontroller'
import CreateCarSpecificationController from '../../../../modules/cars/useCases/CreateCarSpecification/CreateCarpecificationController'
import ListAvailableCarsController from '../../../../modules/cars/useCases/ListAvailableCars/ListAvailableCarsController'
import UploadCarImageController from '../../../../modules/cars/useCases/UploadCarImage/UploadCarImageController'
import ensureAdmin from '../middlewares/ensureAdmin'
import ensureAutheticaded from '../middlewares/ensureAtheticated'
import UploadConfig from '../../../../config/upload'
import multer from 'multer'

const CarsRoutes = Router()

const carsController = new CarsController
const listaAvailableCars = new ListAvailableCarsController
const createSpecificationCarController = new CreateCarSpecificationController
const UploadCarimageController = new UploadCarImageController

const uploadImageCar = multer(UploadConfig)

CarsRoutes.post('/',ensureAutheticaded,ensureAdmin,carsController.handle)

CarsRoutes.get('/available',listaAvailableCars.handle)

CarsRoutes.post(   
    '/specifications/:id',
    ensureAutheticaded,
    ensureAdmin,
    createSpecificationCarController.hadle,
)

CarsRoutes.post(
    '/images/:id',
    ensureAutheticaded,
    ensureAdmin,
    uploadImageCar.array('image'),
    UploadCarimageController.handle,
)

export default CarsRoutes
