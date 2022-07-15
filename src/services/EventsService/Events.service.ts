import { singleton } from "tsyringe";
import EventsModel from "../../models/events.model";
import BaseService from "../Base.service";
import {
	responseSuccessType,
	responseFailType,
} from "../InterfaceBase.service";
import InterfaceEventsService from "./InterfaceEvents.service";

@singleton()
export default class EventsService
	extends BaseService
	implements InterfaceEventsService
{
	constructor(protected model: EventsModel) {
		super();
	}

	public async index(): Promise<responseSuccessType | responseFailType> {
		try {
			return this.successResponse(
				await this.model.find(
					["id", "link", "thumbnail", "title"],
					[],
					4,
					"id",
					"desc"
				)
			);
		} catch (error) {
			console.log(error);

			return this.failResponse("Không thể truy cập Events");
		}
	}
}
