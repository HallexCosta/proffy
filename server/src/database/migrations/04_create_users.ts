import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.string('id').unique().notNullable()
    table.string('name').notNullable()
    table.string('lastname').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('photo').notNullable()
    table.string('created_at').notNullable()
    
    // table.timestamp('created_at')
    //   .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    //   .notNullable
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users')
}