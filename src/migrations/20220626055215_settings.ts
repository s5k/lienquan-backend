import { Knex } from 'knex'

exports.up = (knex: Knex) => knex.schema
    .createTable('settings', (table) => {
        table.increments('id').unsigned().primary()
        table.string('key').unique().notNullable()
        table.text('value')
        table.timestamps();
    })

exports.down = (knex: Knex) => knex.schema.dropTable('settings')