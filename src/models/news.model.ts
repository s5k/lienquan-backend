import BaseModel from "./base.model";

export default class NewsModel extends BaseModel {
	protected tableName: string = "news";
	protected fillable: string[] = [
		"user_id",
		"is_hot_news",
		"thumbnail",
		"title",
		"description",
		"body",
		"created_at",
		"updated_at",
	];
}
