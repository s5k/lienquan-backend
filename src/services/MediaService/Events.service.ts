import { singleton } from "tsyringe";
import MediaModel from "../../models/media.model";
import SettingsModel from "../../models/settings.model";
import BaseService from "../Base.service";
import {
	responseSuccessType,
	responseFailType,
} from "../InterfaceBase.service";
import InterfaceMediaService from "./InterfaceMediaservice";

@singleton()
export default class MediaService
	extends BaseService
	implements InterfaceMediaService
{
	constructor(protected model: MediaModel) {
		super();
	}

	public async index(): Promise<responseSuccessType | responseFailType> {
		try {
			const medias = await this.model
				.getQueryBuilder()
				.table("media")
				.orderBy("created_at", "asc");
			const images = await this.model
				.getQueryBuilder()
				.table("images")
				.whereIn(
					"media_id",
					medias
						.filter((media) => media.is_video === 0)
						.map((media) => media.id)
				);
			const mediaList = medias.map((media) => {
				return {
					...media,
					images: images
						.filter((image) => image.media_id === media.id)
						.map((image) => image.path),
				};
			});

			return this.successResponse(mediaList);
		} catch (error) {
			return this.failResponse("Không thể tải dữ liệu Media");
		}
	}
}
