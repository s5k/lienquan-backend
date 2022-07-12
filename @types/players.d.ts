import { Knex } from "knex";

interface PlayersInterface {
	id?: number;
	team_id?: number;
	position?: number;
	image?: string;
	lane?: string;
	name?: string;
	created_at?: string;
	updated_at?: string;
}

// Declare types for select, insert, update
declare module "knex/types/tables" {
	interface Tables {
		players: PlayersInterface;
		players_composite: Knex.CompositeTableType<
			//Declare fields for select
			PlayersInterface,
			// the first params required to insert the data, and the second neither.
			Pick<
				PlayersInterface,
				"team_id" | "position" | "image" | "lane" | "name"
			> &
				Partial<Pick<PlayersInterface, "create_time" | "updated_at">>,
			// this line allow you update all fields, except "id" field
			Partial<Omit<PlayersInterface, "id">>
		>;
	}
}
