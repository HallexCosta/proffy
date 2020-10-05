import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.string('id').unique().notNullable()

        table.integer('proffy_id')
            .notNullable()
            .references('id')
            .inTable('proffys')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.string('created_at').notNullable()

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections')
}