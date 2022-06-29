import { Request, Response } from "express";
import { db } from "../../config/knex";
import { failResponse, successResponse } from "../helpers/methods";

export const index = async (req: Request, res: Response): Promise<void> => {
	try {
		const medias = await db().table("media").orderBy("created_at", "asc");
		const images = await db()
			.table("images")
			.whereIn(
				"media_id",
				medias.filter((media) => media.is_video === 0).map((media) => media.id)
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
