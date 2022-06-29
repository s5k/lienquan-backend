import { Knex } from "knex";

exports.up = (knex: Knex) =>
	knex.schema.createTable("media", (table) => {
		table.increments("id").unsigned().primary();
		table.boolean("is_video");
		table.string("name");
		table.string("link");
		table.timestamps();
	});

exports.down = (knex: Knex) => knex.schema.dropTableIfExists("media");
