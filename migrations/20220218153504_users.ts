import { Knex } from 'knex'

exports.up = (knex: Knex) => knex.schema
    .createTable(
        'users', 
        (table) => {
            table.increments('id').unsigned().primary()
            table.string('full_name')
            table.string('email').unique().notNullable()
            table.string('username').unique().notNullable()
            table.string('password').notNullable()
            table.timestamps()
        }
    )

exports.down = (knex: Knex) => knex.schema.dropTable('users')