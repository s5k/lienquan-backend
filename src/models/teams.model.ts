import BaseModel from "./base.model";

export default () =>
	new BaseModel("teams", [
		"region",
		"logo",
		"name",
		"description",
		"video_link",
		"code",
		"create_time",
		"updated_at",
	]);
