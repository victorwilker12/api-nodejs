import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('dearleship',table => {
        table.increments('id').primary();
        table.string('image').notNullable;
        table.string('name').notNullable;
        table.string('email').notNullable;
        table.string('whatsapp').notNullable;
        table.decimal('latitude').notNullable;
        table.decimal('londitude').notNullable;
        table.string('city').notNullable;
        table.string('uf',2).notNullable;
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('dearleship');
}