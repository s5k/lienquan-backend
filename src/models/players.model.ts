import BaseModel from "./base.model";

export default () =>
	new BaseModel("players", [
		"team_id",
		"position",
		"image",
		"lane",
		"name",
		"create_time",
		"updated_at",
	]);
