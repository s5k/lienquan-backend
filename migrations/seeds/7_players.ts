import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("players").del();

	const dataInserts = [];

	for (let team_id = 1; team_id <= 10; team_id++) {
		for (let index = 1; index <= 10; index++) {
			dataInserts.push({
				team_id: team_id,
				position: 1,
				image: "upload/images/gau-avatar.png",
				lane: "mid",
				name:
					"GauBaki " +
					Math.random()
						.toString(36)
						.substring(2, 4 + 2),
			});
		}
	}

	// Inserts seed entries
	await knex("players").insert(dataInserts);
}
