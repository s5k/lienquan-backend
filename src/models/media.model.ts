import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("MediaModel", [
	"media",
	["is_video", "name", "link", "create_time", "updated_at"],
])
export default class MediaModel extends BaseModel {}
