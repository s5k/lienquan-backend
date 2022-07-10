import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("ImagesModel", ["images", ["media_id", "path"]])
export default class ImagesModel extends BaseModel {}
