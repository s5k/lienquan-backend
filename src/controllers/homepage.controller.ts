import { Request, Response } from "express";
import { SettingInterface } from "../@types/settings";
import { Inject } from "../decorators/classes/inject.classes";
import { failResponse, successResponse } from "../helpers/methods";
import SettingsModel from "../models/settings.model";
import BaseController from "./base.controller";

class HomepageController extends BaseController {
	@Inject("SettingsModel")
	protected model!: SettingsModel;

	index = async (req: Request, res: Response): Promise<void> => {
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
	};

	update = async (req: Request, res: Response): Promise<void> => {
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
	};
}

export default () => new HomepageController();
