import { UploadedFile } from "express-fileupload";
import InterfaceBaseService, {
	responseFailType,
	responseSuccessType,
} from "../InterfaceBase.service";

export default interface InterfaceUploadFileService
	extends InterfaceBaseService {
	uploadImage(
		attachment: UploadedFile
	): Promise<responseSuccessType | responseFailType>;
}
