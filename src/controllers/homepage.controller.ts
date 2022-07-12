import { Request, Response } from "express";
import { SettingInterface } from "../@types/settings";
import Controller from "../decorators/classes/controller.classes";
import { Get, Patch } from "../decorators/methods/routes.methods";
import { failResponse, successResponse } from "../helpers/methods";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import { settingsValidator } from "../middlewares/validators/settings.validations";
import { validate } from "../middlewares/validators/wrapper.validator";
import SettingsModel from "../models/settings.model";
import BaseController from "./base.controller";

@Controller("homepage")
export default class HomepageController extends BaseController {
	constructor(protected model: SettingsModel) {
		super();
	}

	@Get("/")
	public async index(req: Request, res: Response): Promise<void> {
		this.model
			.getQueryBuilder()
			.table("settings")
			.select("key", "value")
			.whereIn("key", ["logo_src", "introduce_text", "watch_now_url"])
			.then((rows: SettingInterface[]) => {
				const data: any = {};
				for (const row of rows) {
					data[row.key] = row.value;
				}

				res.send(successResponse(data));
			})
			.catch((error) => res.send(failResponse("Không thể truy cập dữ liệu!")));
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
