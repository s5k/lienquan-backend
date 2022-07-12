import { Knex } from "knex";

exports.up = (knex: Knex) =>
	knex.schema.createTable("news", (table) => {
		table.increments("id").unsigned().primary();
		table.integer("user_id").unsigned();
		table
			.foreign("user_id")
			.references("id")
			.inTable("users")
			.onDelete("CASCADE");
		table.boolean("is_hot_news");
		table.string("thumbnail");
		table.string("title");
		table.string("description");
		table.text("body");
		table.timestamp("created_at");
		table.timestamp("updated_at");
	});

exports.down = (knex: Knex) => knex.schema.dropSchema("news");
