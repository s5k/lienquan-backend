import BaseModel from "./base.model";

export default () =>
	new BaseModel("media", [
		"is_video",
		"name",
		"link",
		"create_time",
		"updated_at",
	]);
