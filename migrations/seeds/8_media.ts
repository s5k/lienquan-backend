import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("media").del();
	const data = [];
	for (let index = 1; index <= 10; index++) {
		data.push({
			id: index,
			is_video: index > 5 ? false : true,
			name: "Team Flash thắng tại AIC 2022",
			link: index <= 5 ? "https://www.youtube.com/watch?v=iXEOoZScFiQ" : "",
			created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
		});
	}

	// Inserts seed entries
	await knex("media").insert(data);
}
