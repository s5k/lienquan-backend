import { Knex } from "knex";

exports.up = (knex: Knex) =>
	knex.schema.createTable("images", (table) => {
		table.increments("id").unsigned().primary();
		table.integer("media_id").unsigned();
		table.foreign("media_id").references("media.id").onDelete("SET NULL");
		table.string("path");
	});

exports.down = (knex: Knex) => knex.schema.dropTableIfExists("images");
