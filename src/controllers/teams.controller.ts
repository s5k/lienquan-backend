import { Request, Response } from "express";
import { db } from "../../config/knex";
import { failResponse, successResponse } from "../helpers/methods";

export const index = async (req: Request, res: Response): Promise<void> => {
	const teams = await db()
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
	const players = await db()
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

export const update = async (req: Request, res: Response): Promise<void> => {
	try {
		await db()
			.table("teams")
			.update({
				region: req.body.region,
				logo: req.body.logo,
				name: req.body.name,
				description: req.body.description,
				video_link: req.body.video_link,
				code: req.body.code,
				updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
			})
			.where("id", req.params.id);

		res.status(202).send(successResponse([]));
	} catch (error) {
		res.send(failResponse("Không thể cập nhật teams!"));
	}
};

export const create = async (req: Request, res: Response): Promise<void> => {
	try {
		await db()
			.table("teams")
			.insert({
				region: req.body.region,
				logo: req.body.logo,
				name: req.body.name,
				description: req.body.description,
				video_link: req.body.video_link,
				code: req.body.code,
				created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
			});

		res.status(201).send(successResponse([]));
	} catch (error) {
		console.log(error);

		res.send(failResponse("Không thể cập nhật teams!"));
	}
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
	try {
		await db().table("teams").where("id", req.params.id).delete();

		res.status(204).send(successResponse([]));
	} catch (error) {
		res.send(failResponse("Xóa tin thất bại!"));
	}
};
