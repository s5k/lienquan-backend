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

@Controller("prize")
export default class PrizeController extends BaseController {
	constructor(protected model: SettingsModel) {
		super();
	}

	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
		const data: any = {};
		const rows = await this.model
			.getQueryBuilder()
			.table("settings")
			.select("key", "value")
			.whereIn("key", ["prize_image", "prize_image_mobile"]);

		for (const row of rows) {
			data[row.key] = row.value;
		}

		res.send(successResponse(data));
	}

	@Patch("/", {
		before: [authenticationMiddleware, validate(settingsValidator)],
	})
	public async update(req: Request, res: Response): Promise<void> {
		try {
			const listData: SettingInterface[] = req.body.data;
			const executeSqls = [];

			for (const data of listData) {
				executeSqls.push(
					this.model
						.getQueryBuilder()
						.table("settings")
						.update({ value: data.value })
						.where({ key: data.key })
				);
			}

			await Promise.all(executeSqls);

			res.send(successResponse([]));
		} catch (error) {
			console.log(error);

			res.status(400).send(failResponse("Không thể cập nhật!"));
		}
	}
}
