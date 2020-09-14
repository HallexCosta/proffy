import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('recoveries', table => {
    table.string('key').unique().nullable()
    table.string('expire').nullable()

    table.string('user_email')
      .notNullable()
      .references('email')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('recoveries')
}