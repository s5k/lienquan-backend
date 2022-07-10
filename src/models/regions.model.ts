import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("RegionsModel", ["regions", ["code", "country_name"]])
export default class RegionsModel extends BaseModel {}
