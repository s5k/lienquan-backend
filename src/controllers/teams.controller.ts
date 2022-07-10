import { Request, Response } from "express";
import { Inject } from "../decorators/classes/inject.classes";
import { successResponse } from "../helpers/methods";
import TeamsModel from "../models/teams.model";
import BaseController from "./base.controller";

class TeamsController extends BaseController {
	@Inject("TeamsModel")
	protected model!: TeamsModel;

	index = async (req: Request, res: Response): Promise<void> => {
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
	};
}

export default () => new TeamsController();
