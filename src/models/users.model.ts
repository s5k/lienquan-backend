import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("UsersModel", [
	"users",
	["full_name", "email", "username", "password", "created_at", "updated_at"],
])
export default class UsersModel extends BaseModel {}
