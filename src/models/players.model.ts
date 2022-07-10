import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("PlayersModel", [
	"players",
	["team_id", "position", "image", "lane", "name", "create_time", "updated_at"],
])
export default class PlayersModel extends BaseModel {}
