import { Request, Response } from "express";
import { db } from "../../config/knex";
import { failResponse, successResponse } from "../helpers/methods";

export const index = async (req: Request, res: Response): Promise<void> => {
	const listNews = await db()
		.table("news")
		.select([
			"id",
			"is_hot_news",
			"thumbnail",
			"title",
			"description",
			"create_time",
		])
		.orderBy("id", "desc");

	res.send(successResponse(listNews));
};

export const detail = async (req: Request, res: Response): Promise<void> => {
	const post: any = await db()
		.table("news")
		.join("users", "news.user_id", "=", "users.id")
		.select(["news.*", "users.full_name as author"])
		.where("news.id", req.params.id)
		.first();
	const related_posts: any = await db()
		.table("news")
		.select([
			"id",
			"is_hot_news",
			"thumbnail",
			"title",
			"description",
			"create_time",
		])
		.limit(3)
		.orderBy("id", "desc")
		.whereNot("id", req.params.id);

	res.send(
		successResponse(
			Object.assign(post, {
				related_posts,
			})
		)
	);
};

export const update = async (req: Request, res: Response): Promise<void> => {
	try {
		await db()
			.table("news")
			.update({
				is_hot_news: req.body.is_hot_news,
				thumbnail: req.body.thumbnail,
				title: req.body.title,
				description: req.body.description,
				body: req.body.body,
				updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
			})
			.where("id", req.params.id);

		res.status(202).send(successResponse([]));
	} catch (error) {
		res.send(failResponse("Không thể cập nhật tin tức!"));
	}
};

export const create = async (req: Request, res: Response): Promise<void> => {
	try {
		await db()
			.table("news")
			.insert({
				is_hot_news: req.body.is_hot_news,
				thumbnail: req.body.thumbnail,
				title: req.body.title,
				description: req.body.description,
				body: req.body.body,
				user_id: req.user?.id,
				create_time: new Date().toISOString().slice(0, 19).replace("T", " "),
			});

		res.status(201).send(successResponse([]));
	} catch (error) {
		console.log(error);

		res.send(failResponse("Không thể cập nhật tin tức!"));
	}
};

export const destroy = async (req: Request, res: Response): Promise<void> => {
	try {
		await db().table("news").where("id", req.params.id).delete();

		res.status(204).send(successResponse([]));
	} catch (error) {
		res.send(failResponse("Xóa tin thất bại!"));
	}
};
