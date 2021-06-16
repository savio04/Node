import { Router} from 'express'
import multer from 'multer'
import uploadConfig from '../../../../config/upload'
import ensureAutheticaded from '../middlewares/ensureAtheticated'
import CreateUserController from '../../../../modules/accounts/UseCases/CreateUser/CreateUserController'
import UpdateUserAvatarController from '../../../../modules/accounts/UseCases/UpdateUserAvatar/UpdateUserAvatarCotroller'
const AccountRoute = Router()
const upload = multer(uploadConfig.upload('./temp/avatar'))

const userController = new CreateUserController
const AvatarUploadController = new UpdateUserAvatarController


AccountRoute.post('/',userController.handle)

AccountRoute.patch('/avatar',ensureAutheticaded,upload.single('avatar'),AvatarUploadController.handle)

export default AccountRoute