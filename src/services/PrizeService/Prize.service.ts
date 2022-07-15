import { singleton } from "tsyringe";
import MediaModel from "../../models/media.model";
import SettingsModel from "../../models/settings.model";
import BaseService from "../Base.service";
import {
	responseSuccessType,
	responseFailType,
} from "../InterfaceBase.service";
import InterfacePrizeService from "./InterfacePrize.service";

@singleton()
export default class PrizeService
	extends BaseService
	implements InterfacePrizeService
{
	constructor(protected model: SettingsModel) {
		super();
	}

	public async index(): Promise<responseSuccessType | responseFailType> {
		try {
			const data: any = {};
			const rows = await this.model
				.getQueryBuilder()
				.table("settings")
				.select("key", "value")
				.whereIn("key", ["prize_image", "prize_image_mobile"]);

			for (const row of rows) {
				data[row.key] = row.value;
			}

			return this.successResponse(data);
		} catch (error) {
			return this.failResponse("Không thể tải dữ liệu");
		}
	}

	public async update(
		data: Record<string, any>[]
	): Promise<responseSuccessType | responseFailType> {
		try {
			const executeSqls = [];

			for (const row of data) {
				executeSqls.push(
					this.model
						.getQueryBuilder()
						.table("settings")
						.update({ value: row.value })
						.where({ key: row.key })
				);
			}

			await Promise.all(executeSqls);

			return this.successResponse([]);
		} catch (error) {
			console.log(error);

			return this.failResponse("Không thể cập nhật!");
		}
	}
}
