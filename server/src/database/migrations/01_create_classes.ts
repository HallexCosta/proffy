import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.string('id').unique().notNullable()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()

        table.string('proffy_id')
            .notNullable()
            .references('id')
            .inTable('proffys')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
}