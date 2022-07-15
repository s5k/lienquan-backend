import { Request, Response } from "express";
import { inject } from "tsyringe";
import Controller from "../../@decorators/classes/controller.classes";
import { Get } from "../../@decorators/methods/routes.methods";
import InterfaceMediaService from "../services/MediaService/InterfaceMediaservice";
import BaseController from "./base.controller";

@Controller("media")
export default class MediaController extends BaseController {
	constructor(
		@inject("InterfaceMediaService") protected service: InterfaceMediaService
	) {
		super();
	}

	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
		const response = await this.service.index();
		res.status(response.status ? 200 : 400).send(response);
	}
}
