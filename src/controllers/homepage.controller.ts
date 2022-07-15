import { Request, Response } from "express";
import { SettingInterface } from "../../@types/settings";
import Controller from "../../@decorators/classes/controller.classes";
import { Get, Patch } from "../../@decorators/methods/routes.methods";
import { failResponse, successResponse } from "../helpers/methods";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import { settingsValidator } from "../middlewares/validators/settings.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
import SettingsModel from "../models/settings.model";
import BaseController from "./base.controller";
import InterfaceHomePageService from "../services/HomePageService/InterfaceHomePage.service";
import { inject } from "tsyringe";

@Controller("homepage")
export default class HomepageController extends BaseController {
	constructor(
		@inject("InterfaceHomePageService")
		protected service: InterfaceHomePageService
	) {
		super();
	}

	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
		const response = await this.service.index();
		res.status(response.status ? 200 : 400).send(response);
	}

	@Patch("/", {
		before: [authenticationMiddleware, validate(settingsValidator)],
	})
	public async update(req: Request, res: Response): Promise<void> {
		const response = await this.service.update(req.body.data);
		res.status(response.status ? 201 : 400).send(response);
	}
}
