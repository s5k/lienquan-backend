import BaseModel from "./base.model";

export default () =>
	new BaseModel("settings", ["key", "value", "created_at", "updated_at"]);
