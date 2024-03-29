/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('customers').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('customers', function (table) {
        table.increments('customer_id').primary()
        table.string('name').notNullable()
        table.string('lastname').notNullable()
        table.string('email').notNullable().unique()
        table.string('phone').notNullable().unique()
        table.string('addressStreet').notNullable()
        table.string('postalCode').notNullable()
        table.string('colony').notNullable()
        table.string('city').notNullable()
        table.boolean('active').notNullable().defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('customers').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('customers')
    }
  })
}
