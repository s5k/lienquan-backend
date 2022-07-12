import BaseModel from "./base.model";

export default class ImagesModel extends BaseModel {
	protected tableName: string = "images";
	protected fillable: string[] = ["media_id", "path"];
}
