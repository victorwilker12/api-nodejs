import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('dearlership_category',table => {
        table.increments('id').primary();
        table.integer('dearlership_id')
        .notNullable()
        .references('id')
        .inTable('dearlership');
       
        table.integer('category_id')
        .notNullable()
        .references('id')
        .inTable('category');
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('dearlership_category');
}