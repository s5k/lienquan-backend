import { object, string } from "yup";

export const resetPassword = object({
	body: object({
		token: string().required(),
		new_password: string().min(8).required(),
	}),
});
