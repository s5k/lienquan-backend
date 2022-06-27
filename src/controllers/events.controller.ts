import { Request, Response } from "express";
import { db } from "../../config/knex";
import { failResponse, successResponse } from "../helpers/methods";

export const index = async (req: Request, res: Response): Promise<void> => {
	try {
		res.send(
			successResponse(
				await db()
					.table("events")
					.select(["id", "link", "thumbnail", "title"])
					.limit(4)
					.orderBy("id", "desc")
			)
		);
	} catch (error) {
		res.status(400).send(failResponse("Không thể truy cập Events"));
	}
};

export const update = async (req: Request, res: Response): Promise<void> => {
	try {
		await db()
			.table("events")
			.update({
				link: req.body.link,
				thumbnail: req.body.thumbnail,
				title: req.body.title,
			})
			.where("id", req.params.id);

		res.status(202).send(successResponse([]));
	} catch (error) {
		res.send(failResponse("Không thể cập nhật tin tức!"));
	}
};

export const create = async (req: Request, res: Response): Promise<void> => {
	try {
		await db().table("events").insert({
			link: req.body.link,
			thumbnail: req.body.thumbnail,
			title: req.body.title,
		});

		res.status(201).send(successResponse([]));
	} catch (error) {
		console.log(error);

		res.send(failResponse("Không thể cập nhật tin tức!"));
	}
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
	try {
		await db().table("events").where("id", req.params.id).delete();

		res.status(204).send(successResponse([]));
	} catch (error) {
		res.send(failResponse("Xóa tin thất bại!"));
	}
};
