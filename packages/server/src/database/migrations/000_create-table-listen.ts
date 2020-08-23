import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('servers_listen', table => {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('endpoint').notNullable();
        table.string('password').notNullable();
        table.boolean('status').defaultTo(false).notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('servers_listen');
}