import { Knex } from "knex";

interface ImagesInterface {
	id?: number;
	media_id?: number;
	path?: string;
}

// Declare types for select, insert, update
declare module "knex/types/tables" {
	interface Tables {
		images: ImagesInterface;
		images_composite: Knex.CompositeTableType<
			//Declare fields for select
			ImagesInterface,
			// the first params required to insert the data, and the second neither.
			Pick<ImagesInterface, "media_id" | "path"> &
				Partial<Pick<ImagesInterface>>,
			// this line allow you update all fields, except "id" field
			Partial<Omit<ImagesInterface, "id">>
		>;
	}
}
