import BaseModel from "./base.model";

export default class UsersModel extends BaseModel {
	protected tableName: string = "users";
	protected fillable: string[] = [
		"full_name",
		"email",
		"username",
		"password",
		"created_at",
		"updated_at",
	];
}
