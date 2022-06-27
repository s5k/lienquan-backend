import { bool, number, object, string } from "yup";

export const createEventsValidator = object({
	body: object({
		link: string().required(),
		thumbnail: string().required(),
		title: string().required(),
	}),
});

export const updateEventsValidator = object({
	body: object({
		link: string(),
		thumbnail: string(),
		title: string(),
	}),
});
