import { Injectable } from "../decorators/classes/injectable.classes";
import BaseModel from "./base.model";

@Injectable("EventsModel", ["events", ["link", "thumbnail", "title"]])
export default class Events extends BaseModel {}
