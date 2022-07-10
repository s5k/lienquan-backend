import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("NewsModel", [
	"news",
	[
		"user_id",
		"is_hot_news",
		"thumbnail",
		"title",
		"description",
		"body",
		"create_time",
		"updated_at",
	],
])
export default class NewsModel extends BaseModel {}
