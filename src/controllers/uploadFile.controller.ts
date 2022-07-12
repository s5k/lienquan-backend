import { Request, Response } from "express";
import BaseController from "./base.controller";
import { UploadedFile } from "express-fileupload";
import { failResponse, successResponse } from "../helpers/methods";
import Controller from "../decorators/classes/controller.classes";
import { Post } from "../decorators/methods/routes.methods";
import { validate } from "../middlewares/validators/wrapper.validator";
import { uploadImageValidator } from "../middlewares/validators/uploadImage.validations";
import authenticationMiddleware from "../middlewares/authentication.middleware";

@Controller("files")
export default class UploadFileController extends BaseController {
	@Post("/upload_image", {
		before: [authenticationMiddleware, validate(uploadImageValidator)],
	})
	public async uploadImage(req: Request, res: Response) {
		try {
			const attachment = req.files?.attachment as UploadedFile;
			const timeUploaded = Math.round(new Date().getTime() / 1000).toString();
			const filePath =
				`upload/images/${timeUploaded}_${attachment.name}`.replace(" ", "_");
			const uploadPath = `${__dirname}/../../public/${filePath}`;

			await attachment.mv(uploadPath);

			res.status(201).send(successResponse([filePath]));
		} catch (error) {
			console.log(error);

			res.status(400).send(failResponse("Không thể tải hình lên!"));
		}
	}
}
