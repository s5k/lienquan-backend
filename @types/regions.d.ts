import { Knex } from "knex";

interface RegionsInterface {
	code?: string;
	country_name?: string;
}

// Declare types for select, insert, update
declare module "knex/types/tables" {
	interface Tables {
		players: RegionsInterface;
		players_composite: Knex.CompositeTableType<
			//Declare fields for select
			RegionsInterface,
			// the first params required to insert the data, and the second neither.
			Pick<RegionsInterface, "code" | "country_name"> &
				Partial<Pick<RegionsInterface>>,
			// this line allow you update all fields, except "id" field
			Partial<Omit<RegionsInterface>>
		>;
	}
}
