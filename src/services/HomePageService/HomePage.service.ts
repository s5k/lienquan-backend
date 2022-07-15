import { singleton } from "tsyringe";
import { SettingInterface } from "../../../@types/settings";
import SettingsModel from "../../models/settings.model";
import BaseService from "../Base.service";
import {
	responseSuccessType,
	responseFailType,
} from "../InterfaceBase.service";
import InterfaceHomePageService from "./InterfaceHomePage.service";

interface settingsUpdateField {
	key: string;
	value: string;
}

@singleton()
export default class HomePageService
	extends BaseService
	implements InterfaceHomePageService
{
	constructor(protected model: SettingsModel) {
		super();
	}

	public async index(): Promise<responseSuccessType | responseFailType> {
		return this.model
			.getQueryBuilder()
			.table("settings")
			.select("key", "value")
			.whereIn("key", ["logo_src", "introduce_text", "watch_now_url"])
			.then((rows: SettingInterface[]) => {
				const data: any = {};
				for (const row of rows) {
					data[row.key] = row.value;
				}

				return this.successResponse(data);
			})
			.catch((error) => this.failResponse("Không thể truy cập dữ liệu!"));
	}

	public async update(
		listSettings: settingsUpdateField[]
	): Promise<responseSuccessType | responseFailType> {
		try {
			const executeSqls = [];

			for (const data of listSettings) {
				executeSqls.push(
					this.model
						.getQueryBuilder()
						.table("settings")
						.update({ value: data.value })
						.where({ key: data.key })
				);
			}

			await Promise.all(executeSqls);

			return this.successResponse([]);
		} catch (error) {
			console.error(error);

			return this.failResponse("Không thể cập nhật!");
		}
	}
}
