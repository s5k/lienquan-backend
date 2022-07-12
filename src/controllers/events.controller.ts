import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "../decorators/classes/controller.classes";
import { Delete, Get, Post, Put } from "../decorators/methods/routes.methods";
import { failResponse, successResponse } from "../helpers/methods";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createEventsValidator,
	updateEventsValidator,
} from "../middlewares/validators/events.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
import EventsModel from "../models/events.model";
import BaseController from "./base.controller";

@Controller("events")
export default class EventsController extends BaseController {
	constructor(protected model: EventsModel) {
		super();
	}

	/**
	 * index
	 */
	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
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
	}

	@Post("/", {
		before: [authenticationMiddleware, validate(createEventsValidator)],
	})
	public async create(
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		res: Response<any, Record<string, any>>
	): Promise<void> {
		super.create(req, res);
	}

	@Put("/:id", {
		before: [authenticationMiddleware, validate(updateEventsValidator)],
	})
	public async update(
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		res: Response<any, Record<string, any>>
	): Promise<void> {
		super.update(req, res);
	}

	@Delete("/:id", { before: [authenticationMiddleware] })
	public async destroy(
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		res: Response<any, Record<string, any>>
	): Promise<void> {
		super.destroy(req, res);
	}
}
