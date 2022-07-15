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
import { failResponse, successResponse } from "../helpers/methods";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import {
	createNewsValidator,
	updateNewsValidator,
} from "../middlewares/validators/news.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
import NewsModel from "../models/news.model";
import InterfaceNewsService from "../services/NewsService/InterfaceNews.service";
import BaseController from "./base.controller";

@Controller("news")
export default class NewsController extends BaseController {
	constructor(
		@inject("InterfaceNewsService") protected service: InterfaceNewsService
	) {
		super();
	}

	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
		const response = await this.service.index();
		res.status(response ? 200 : 400).send(response);
	}

	@Get("/:id")
	public async detail(req: Request, res: Response): Promise<void> {
		const id: number = req.params.id as unknown as number;
		const response = await this.service.detail(id);

		res.status(response.status ? 200 : 400).send(response);
	}

	@Post("/", {
		before: [authenticationMiddleware, validate(createNewsValidator)],
	})
	public async create(req: Request, res: Response): Promise<void> {
		super.create(req, res);
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
