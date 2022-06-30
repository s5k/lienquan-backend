import { Router as ExpressRouter } from "express";
import processFileUpload from "express-fileupload";
import uploadFileController from "../controllers/uploadFile.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import { uploadImageValidator } from "../middlewares/validators/uploadImage.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
const router = ExpressRouter();
const instanceHomepageController = uploadFileController();

router.post(
	"/upload_image",
	processFileUpload(),
	validate(uploadImageValidator),
	instanceHomepageController.uploadImage
);

export default router;
