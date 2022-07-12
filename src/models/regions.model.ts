import BaseModel from "./base.model";

export default class RegionsModel extends BaseModel {
	protected tableName: string = "regions";
	protected fillable: string[] = ["code", "country_name"];
}
