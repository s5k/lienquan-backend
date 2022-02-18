import { knex, Knex } from "knex";

export const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host : process.env.DB_HOST,
    port : parseInt(process.env.DB_PORT || ''),
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  },
  migrations: {
    stub: 'config/knex-migration.stub',
    extension: "ts"
  }
}

const instance: Knex = knex(config);

export const db = () => instance