import Bcrypt from "bcrypt";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("users").del();

	// Inserts seed entries
	await knex("users").insert([
		{
			id: 1,
			full_name: "Quy",
			email: "quy@gmail.com",
			username: "quyuser",
			password: await Bcrypt.hash("defaultpassword", 10),
		},
		{
			id: 2,
			full_name: "Dan",
			email: "dan@gmail.com",
			username: "danuser",
			password: await Bcrypt.hash("defaultpassword", 10),
		},
	]);
}
