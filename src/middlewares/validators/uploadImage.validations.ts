import { mixed, object, string } from "yup";
import { config } from "../../../config/environment";

const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/svg+xml"];

export const uploadImageValidator = object({
	files: object({
		attachment: mixed()
			.required()
			.test(
				"FILE_SIZE",
				"Tệp tải lên quá lớn!",
				(value) => !value || (value && value.size <= config.UPLOAD_MAX_SIZE)
			)
			.test(
				"FILE_FORMAT",
				"Tệp được tải lên có định dạng không được hỗ trợ!",
				(value) =>
					!value || (value && SUPPORTED_FORMATS.includes(value.mimetype))
			),
	}),
});
