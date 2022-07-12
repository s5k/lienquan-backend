import BaseModel from "./base.model";

export default class TeamsModel extends BaseModel {
	protected tableName: string = "teams";
	protected fillable: string[] = [
		"region",
		"logo",
		"name",
		"description",
		"video_link",
		"code",
		"create_time",
		"updated_at",
	];
}
