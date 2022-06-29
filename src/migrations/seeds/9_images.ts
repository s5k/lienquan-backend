import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("images").del();

	// Inserts seed entries
	await knex("images").insert([
		{
			id: 11,
			media_id: 5,
			path: "upload/images/aic-2022.jpg",
		},
		{
			id: 12,
			media_id: 5,
			path: "upload/images/aic-2022-2.jpg",
		},
		{
			id: 1,
			media_id: 6,
			path: "upload/images/aic-2022.jpg",
		},
		{
			id: 2,
			media_id: 6,
			path: "upload/images/aic-2022-2.jpg",
		},

		{
			id: 3,
			media_id: 7,
			path: "upload/images/aic-2022.jpg",
		},
		{
			id: 4,
			media_id: 7,
			path: "upload/images/aic-2022-2.jpg",
		},

		{
			id: 5,
			media_id: 8,
			path: "upload/images/aic-2022.jpg",
		},
		{
			id: 6,
			media_id: 8,
			path: "upload/images/aic-2022-2.jpg",
		},

		{
			id: 7,
			media_id: 9,
			path: "upload/images/aic-2022.jpg",
		},
		{
			id: 8,
			media_id: 9,
			path: "upload/images/aic-2022-2.jpg",
		},

		{
			id: 9,
			media_id: 10,
			path: "upload/images/aic-2022.jpg",
		},
		{
			id: 10,
			media_id: 10,
			path: "upload/images/aic-2022-2.jpg",
		},
	]);
}
