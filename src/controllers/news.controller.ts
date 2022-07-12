import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "../decorators/classes/controller.classes";
import { Delete, Get, Post, Put } from "../decorators/methods/routes.methods";
import { failResponse, successResponse } from "../helpers/methods";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createNewsValidator,
	updateNewsValidator,
} from "../middlewares/validators/news.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
import NewsModel from "../models/news.model";
import BaseController from "./base.controller";

@Controller("news")
export default class NewsController extends BaseController {
	constructor(protected model: NewsModel) {
		super();
	}

	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
		const listNews = await this.model
			.getQueryBuilder()
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
	}

	@Get("/:id")
	public async detail(req: Request, res: Response): Promise<void> {
		try {
			const post: any = await this.model
				.getQueryBuilder()
				.table("news")
				.join("users", "news.user_id", "=", "users.id")
				.select(["news.*", "users.full_name as author"])
				.where("news.id", req.params.id)
				.first();
			const related_posts: any = await this.model
				.getQueryBuilder()
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
		} catch (error) {
			res.status(404).send(failResponse("Không thể tìm thấy bài đăng!"));
		}
	}

	@Post("/", {
		before: [authenticationMiddleware, validate(createNewsValidator)],
	})
	public async create(req: Request, res: Response): Promise<void> {
		try {
			await this.model
				.getQueryBuilder()
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
	}

	@Put("/:id", {
		before: [authenticationMiddleware, validate(updateNewsValidator)],
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
