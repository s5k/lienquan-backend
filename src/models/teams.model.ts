import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("TeamsModel", [
	"teams",
	[
		"region",
		"logo",
		"name",
		"description",
		"video_link",
		"code",
		"create_time",
		"updated_at",
	],
])
export default class TeamsModel extends BaseModel {}
