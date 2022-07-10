import { Request, Response } from "express";
import { Inject } from "../decorators/classes/inject.classes";
import { failResponse, successResponse } from "../helpers/methods";
import MediaModel from "../models/media.model";
import BaseController from "./base.controller";

class MediaController extends BaseController {
	@Inject("MediaModel")
	protected model!: MediaModel;

	index = async (req: Request, res: Response): Promise<void> => {
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

			res.status(200).send(successResponse(mediaList));
		} catch (error) {
			res.status(400).send(failResponse("Không thể tải dữ liệu Media"));
		}
	};
}

export default () => new MediaController();
