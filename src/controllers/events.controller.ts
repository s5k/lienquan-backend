import { Request, Response } from "express";
import { Inject } from "../decorators/classes/inject.classes";
import { failResponse, successResponse } from "../helpers/methods";
import EventsModel from "../models/events.model";
import BaseController from "./base.controller";

class EventController extends BaseController {
	@Inject("EventsModel")
	protected model!: EventsModel;

	/**
	 * index
	 */
	index = async (req: Request, res: Response): Promise<void> => {
		try {
			res.send(
				successResponse(
					await this.model.find(
						["id", "link", "thumbnail", "title"],
						[],
						4,
						"id",
						"desc"
					)
				)
			);
		} catch (error) {
			console.log(error);

			res.status(400).send(failResponse("Không thể truy cập Events"));
		}
	};
}
export default () => new EventController();
