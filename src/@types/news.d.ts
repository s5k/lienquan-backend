import { Knex } from "knex";

interface NewsInterface {
    id?: number
    author?: string
    user_id?: number
    is_hot_news?: boolean
    thumbnail?: string
    title?: string
    description?: string
    body?: string
    create_time?: string
    updated_at?: string
}

// Declare types for select, insert, update
declare module 'knex/types/tables' {
    interface Tables {
        news: NewsInterface
        news_composite: Knex.CompositeTableType<
            //Declare fields for select
            NewsInterface,
            // the first params required to insert the data, and the second neither.
            Pick<NewsInterface, 'user_id' | 'is_hot_news' | 'thumbnail' | 'title' | 'description' | 'body' > & Partial<Pick<NewsInterface, 'create_time' | 'updated_at'>>,
            // this line allow you update all fields, except "id" field
            Partial<Omit<NewsInterface, 'id' | 'user_id'>> 
        >
    }
} 