import BaseModel from "./base.model";

export default class SettingsModel extends BaseModel {
	protected tableName: string = "settings";
	protected fillable: string[] = ["key", "value", "created_at", "updated_at"];
}
