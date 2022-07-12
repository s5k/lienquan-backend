import { Knex } from "knex";

interface TeamsInterface {
	id?: number;
	region?: string;
	logo?: string;
	name?: string;
	description?: string;
	video_link?: string;
	code?: string;
	created_at?: string;
	updated_at?: string;
}

// Declare types for select, insert, update
declare module "knex/types/tables" {
	interface Tables {
		teams: TeamsInterface;
		teams_composite: Knex.CompositeTableType<
			//Declare fields for select
			TeamsInterface,
			// the first params required to insert the data, and the second neither.
			Pick<
				TeamsInterface,
				"region" | "logo" | "name" | "description" | "video_link" | "code"
			> &
				Partial<Pick<TeamsInterface, "created_at" | "updated_at">>,
			// this line allow you update all fields, except "id" field
			Partial<Omit<TeamsInterface, "id">>
		>;
	}
}
