import BaseModel from "./base.model";

export default () =>
	new BaseModel("news", [
		"user_id",
		"is_hot_news",
		"thumbnail",
		"title",
		"description",
		"body",
		"create_time",
		"updated_at",
	]);
