import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("SettingsModel", [
	"settings",
	["key", "value", "created_at", "updated_at"],
])
export default class SettingsModel extends BaseModel {}
