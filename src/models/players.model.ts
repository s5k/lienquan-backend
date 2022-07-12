import BaseModel from "./base.model";

export default class PlayersModel extends BaseModel {
	protected tableName: string = "players";
	protected fillable: string[] = [
		"team_id",
		"position",
		"image",
		"lane",
		"name",
		"create_time",
		"updated_at",
	];
}
