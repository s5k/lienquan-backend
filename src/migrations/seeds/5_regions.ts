import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("regions").del();

	// Inserts seed entries
	await knex("regions").insert([
		{ code: "VN", country_name: "Vietnamese" },
		{ code: "US", country_name: "United States" },
		{ code: "JP", country_name: "Japanese" },
	]);
}
