import { UploadedFile } from "express-fileupload";
import { singleton } from "tsyringe";
import TeamsModel from "../../models/teams.model";
import BaseService from "../Base.service";
import {
	responseSuccessType,
	responseFailType,
} from "../InterfaceBase.service";
import InterfaceUploadFileService from "./InterfaceUploadFile.service";

@singleton()
export default class UploadFileService
	extends BaseService
	implements InterfaceUploadFileService
{
	constructor(protected model: TeamsModel) {
		super();
	}

	public async uploadImage(
		attachment: UploadedFile
	): Promise<responseSuccessType | responseFailType> {
		try {
			const timeUploaded = Math.round(new Date().getTime() / 1000).toString();
			const filePath =
				`upload/images/${timeUploaded}_${attachment.name}`.replace(" ", "_");
			const uploadPath = `${__dirname}/../../../public/${filePath}`;

			await attachment.mv(uploadPath);

			return this.successResponse([filePath]);
		} catch (error) {
			console.log(error);

			return this.failResponse("Không thể tải hình lên!");
		}
	}
}
