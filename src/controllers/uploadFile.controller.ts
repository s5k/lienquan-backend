import { Request, Response } from "express";
import BaseController from "./base.controller";
import { UploadedFile } from "express-fileupload";
import { failResponse, successResponse } from "../helpers/methods";
import Controller from "../../@decorators/classes/controller.classes";
import { Post } from "../../@decorators/methods/routes.methods";
import { validate } from "../middlewares/validators/wrapper.validator";
import { uploadImageValidator } from "../middlewares/validators/uploadImage.validations";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import { inject } from "tsyringe";
import InterfaceUploadFileService from "../services/UploadFileService/InterfaceUploadFile.service";

@Controller("files")
export default class UploadFileController extends BaseController {
	constructor(
		@inject("InterfaceUploadFileService")
		protected service: InterfaceUploadFileService
	) {
		super();
	}

	@Post("/upload_image", {
		before: [authenticationMiddleware, validate(uploadImageValidator)],
	})
	public async uploadImage(req: Request, res: Response) {
		const response = await this.service.uploadImage(
			req.files?.attachment as UploadedFile
		);

		res.status(response.status ? 201 : 400).send(response);
	}
}
