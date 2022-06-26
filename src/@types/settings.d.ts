import { Knex } from "knex";

interface SettingInterface {
    id?: number
    key: string
    value: string
    created_at?: string
    updated_at?: string
}

// Declare types for select, insert, update
declare module 'knex/types/tables' {
    interface Tables {
        settings: SettingInterface
        settings_composite: Knex.CompositeTableType<
            //Declare fields for select
            SettingInterface,
            // the first params required to insert the data, and the second neither.
            Pick<SettingInterface, 'key' > & Partial<Pick<SettingInterface, 'created_at' | 'updated_at'>>,
            // this line allow you update all fields, except "id" field
            Partial<Omit<SettingInterface, 'id'>> 
        >
    }
} 