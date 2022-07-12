import BaseModel from "./base.model";

export default class MediaModel extends BaseModel {
	protected tableName: string = "media";
	protected fillable: string[] = [
		"is_video",
		"name",
		"link",
		"created_at",
		"updated_at",
	];
}
