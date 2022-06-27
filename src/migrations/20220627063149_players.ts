import { Knex } from "knex";

exports.up = (knex: Knex) =>
	knex.schema.createTable("players", (table) => {
		table.increments("id").unsigned().primary();
		table.integer("team_id").unsigned();
		table
			.foreign("team_id")
			.references("id")
			.inTable("teams")
			.onDelete("CASCADE");
		table.integer("position").unsigned();
		table.string("image");
		table.string("lane");
		table.string("name");
		table.timestamps();
	});

exports.down = (knex: Knex) => knex.schema.dropTableIfExists("players");
