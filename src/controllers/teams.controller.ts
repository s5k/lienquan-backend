import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "../../@decorators/classes/controller.classes";
import {
	Delete,
	Get,
	Post,
	Put,
} from "../../@decorators/methods/routes.methods";
import { successResponse } from "../helpers/methods";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createTeamsValidator,
	updateTeamsValidator,
} from "../middlewares/validators/teams.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
import TeamsModel from "../models/teams.model";
import BaseController from "./base.controller";

@Controller("teams")
export default class TeamsController extends BaseController {
	constructor(protected model: TeamsModel) {
		super();
	}

	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
		const teams = await this.model
			.getQueryBuilder()
			.table("teams")
			.select([
				"id",
				"logo",
				"name",
				"region",
				"description",
				"video_link",
				"code",
			]);

		/** Avoid querys N+1 */
		const team_ids = teams.map((team) => team.id);
		const players = await this.model
			.getQueryBuilder()
			.table("players")
			.select(["team_id", "position", "image", "lane", "name"])
			.whereIn("team_id", team_ids)
			.orderBy("position", "asc");
		const teamList = teams.map((team) => {
			return {
				...team,
				players: players.filter((player) => player.team_id === team.id),
			};
		});

		res.send(successResponse(teamList));
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
