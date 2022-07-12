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
		"created_at",
		"updated_at",
	];
}
