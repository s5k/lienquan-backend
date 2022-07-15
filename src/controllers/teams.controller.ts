import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { inject } from "tsyringe";
import Controller from "../../@decorators/classes/controller.classes";
import {
	Delete,
	Get,
	Post,
	Put,
} from "../../@decorators/methods/routes.methods";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createTeamsValidator,
	updateTeamsValidator,
} from "../middlewares/validators/teams.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
import InterfaceTeamsService from "../services/TeamsService/InterfaceTeams.service";
import BaseController from "./base.controller";

@Controller("teams")
export default class TeamsController extends BaseController {
	constructor(
		@inject("InterfaceTeamsService") protected service: InterfaceTeamsService
	) {
		super();
	}

	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
		const response = await this.service.index();
		res.status(response.status ? 200 : 400).send(response);
	}

	@Post("/", {
		before: [authenticationMiddleware, validate(createTeamsValidator)],
	})
	public async create(
		req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
		res: Response<any, Record<string, any>>
	): Promise<void> {
		super.create(req, res);
	}

	@Put("/:id", {
		before: [authenticationMiddleware, validate(updateTeamsValidator)],
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
