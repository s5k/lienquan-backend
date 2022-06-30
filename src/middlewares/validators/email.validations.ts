import { object, string } from "yup";

export const emailValidator = object({
	body: object({
		email: string().email().required(),
	}),
});
