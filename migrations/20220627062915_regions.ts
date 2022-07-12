import { Knex } from "knex";

exports.up = (knex: Knex) =>
	knex.schema.createTable("regions", (table) => {
		table.string("code").unique().primary().notNullable();
		table.string("country_name").unique().notNullable();
	});

exports.down = (knex: Knex) => knex.schema.dropTableIfExists("regions");
