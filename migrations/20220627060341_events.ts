import { Knex } from "knex";

exports.up = (knex: Knex) =>
	knex.schema.createTable("events", (table) => {
		table.increments("id").unsigned().primary();
		table.string("link");
		table.string("thumbnail");
		table.string("title");
	});

exports.down = (knex: Knex) => knex.schema.dropTableIfExists("events");
