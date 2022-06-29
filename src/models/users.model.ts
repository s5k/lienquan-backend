import BaseModel from "./base.model";

export default () =>
	new BaseModel("users", [
		"full_name",
		"email",
		"username",
		"password",
		"created_at",
		"updated_at",
	]);
