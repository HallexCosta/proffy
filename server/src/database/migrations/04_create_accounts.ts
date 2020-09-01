import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('accounts', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('lastname').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('photo').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('accounts')
}