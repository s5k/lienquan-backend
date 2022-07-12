import { Knex } from "knex";

interface EventsInterface {
	id?: number;
	link?: string;
	thumbnail?: string;
	title?: string;
}

// Declare types for select, insert, update
declare module "knex/types/tables" {
	interface Tables {
		events: EventsInterface;
		events_composite: Knex.CompositeTableType<
			//Declare fields for select
			EventsInterface,
			// the first params required to insert the data, and the second neither.
			Pick<EventsInterface, "link" | "thumbnail" | "title"> &
				Partial<Pick<EventsInterface>>,
			// this line allow you update all fields, except "id" field
			Partial<Omit<EventsInterface, "id">>
		>;
	}
}
