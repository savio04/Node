import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import ensureAutheticaded from "../middlewares/ensureAtheticated";
import CreateUserController from "../../../../modules/accounts/UseCases/CreateUser/CreateUserController";
import UpdateUserAvatarController from "../../../../modules/accounts/UseCases/UpdateUserAvatar/UpdateUserAvatarCotroller";
import ProfileUserController from "../../../../modules/accounts/UseCases/ProfileUser/ProfileUserController";
const AccountRoute = Router();
const upload = multer(uploadConfig);

const userController = new CreateUserController();
const AvatarUploadController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

AccountRoute.post("/", userController.handle);

AccountRoute.patch(
    "/avatar",
    ensureAutheticaded,
    upload.single("avatar"),
    AvatarUploadController.handle
);

AccountRoute.get("/profile", ensureAutheticaded, profileUserController.handle);
export default AccountRoute;
