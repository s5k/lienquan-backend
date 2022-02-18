import { Knex } from "knex";

interface UserInterface {
    id: number
    full_name: string
    email: string
    username: string
    password: string
    created_at: string
    updated_at: string
}

// Declare types for select, insert, update
declare module 'knex/types/tables' {
    interface Tables {
        users: UserInterface
        users_composite: Knex.CompositeTableType<
            //Declare fields for select
            UserInterface,
            // the first params required to insert the data, and the second neither.
            Pick<UserInterface, 'full_name' | 'username' | 'password'> & Partial<Pick<UserInterface, 'created_at' | 'updated_at'>>,
            // this line allow you update all fields, except "id" field
            Partial<Omit<UserInterface, 'id'>> 
        >
    }
} 