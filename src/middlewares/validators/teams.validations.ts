import { bool, number, object, string } from "yup";

export const createTeamsValidator = object({
	body: object({
		region: string().required(),
		logo: string().required(),
		name: string().required(),
		description: string().required(),
		video_link: string().required(),
		code: string().required(),
	}),
});

export const updateTeamsValidator = object({
	body: object({
		region: string(),
		logo: string(),
		name: string(),
		description: string(),
		video_link: string(),
		code: string(),
	}),
});
