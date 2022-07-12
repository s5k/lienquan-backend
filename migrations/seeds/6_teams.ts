import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("teams").del();

	// Inserts seed entries
	await knex("teams").insert([
		{
			id: 1,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 2,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 3,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 4,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 5,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 6,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 7,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 8,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 9,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
		{
			id: 10,
			region: "VN",
			logo: "upload/images/flashlogo.png",
			name: "FLASH",
			description:
				"Team Flash is a professional esports organization with FIFA Online 4, Fortnite, and Hearthstone teams competing in Singapore, and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.",
			video_link: "",
			code: "FLC",
		},
	]);
}
