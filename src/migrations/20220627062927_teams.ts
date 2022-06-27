import { Knex } from "knex";

exports.up = (knex: Knex) =>
	knex.schema.createTable("teams", (table) => {
		table.increments("id").unsigned().primary();
		table.string("region");
		table
			.foreign("region")
			.references("code")
			.inTable("regions")
			.onDelete("CASCADE");
		table.string("logo");
		table.string("name");
		table.string("description");
		table.string("video_link");
		table.string("code");
		table.timestamps();
	});

exports.down = (knex: Knex) => knex.schema.dropTableIfExists("teams");
