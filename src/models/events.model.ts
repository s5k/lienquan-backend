import BaseModel from "./base.model";

export default class EventsModel extends BaseModel {
	protected tableName: string = "events";
	protected fillable: string[] = ["link", "thumbnail", "title"];
}
