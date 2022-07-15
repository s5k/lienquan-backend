import { singleton } from "tsyringe";
import TeamsModel from "../../models/teams.model";
import BaseService from "../Base.service";
import {
	responseSuccessType,
	responseFailType,
} from "../InterfaceBase.service";
import InterfaceTeamsService from "./InterfaceTeams.service";

@singleton()
export default class TeamsService
	extends BaseService
	implements InterfaceTeamsService
{
	constructor(protected model: TeamsModel) {
		super();
	}

	public async index(): Promise<responseSuccessType | responseFailType> {
		try {
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

			return this.successResponse(teamList);
		} catch (error) {
			console.error(error);
			return this.failResponse("Không thể tải dữ liệu!");
		}
	}
}
