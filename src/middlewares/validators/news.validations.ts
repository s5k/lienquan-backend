import { bool, number, object, string } from "yup";

export const createNewsValidator = object({
	body: object({
		user_id: number().required(),
		is_hot_news: bool().required(),
		thumbnail: string(),
		title: string().required(),
		description: string().required(),
		body: string(),
		create_time: string(),
		updated_at: string(),
	}),
});

export const updateNewsValidator = object({
	body: object({
		user_id: number().notRequired(),
		is_hot_news: bool().required(),
		thumbnail: string(),
		title: string().required(),
		description: string().required(),
		body: string(),
		create_time: string(),
		updated_at: string(),
	}),
});
