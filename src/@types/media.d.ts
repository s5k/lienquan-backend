import { Knex } from "knex";

interface MediaInterface {
	id?: number;
	is_video?: boolean;
	name?: string;
	link?: string;
	created_at?: string;
	updated_at?: string;
}

// Declare types for select, insert, update
declare module "knex/types/tables" {
	interface Tables {
		media: MediaInterface;
		media_composite: Knex.CompositeTableType<
			//Declare fields for select
			MediaInterface,
			// the first params required to insert the data, and the second neither.
			Pick<MediaInterface, "is_video" | "name" | "link"> &
				Partial<Pick<MediaInterface, "create_time" | "updated_at">>,
			// this line allow you update all fields, except "id" field
			Partial<Omit<MediaInterface, "id">>
		>;
	}
}
