import { Request, Response } from "express";
import BaseController from "./base.controller";
import { UploadedFile } from "express-fileupload";
import { failResponse, successResponse } from "../helpers/methods";

class uploadFile extends BaseController {
	uploadImage = async (req: Request, res: Response) => {
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
	};
}

export default () => new uploadFile();
