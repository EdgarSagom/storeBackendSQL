/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('shops').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('shops', function (table) {
        table.increments('shop_id').primary()
        table.string('name').notNullable()
        table.string('addressStreet').notNullable()
        table.string('city').notNullable()
        table.string('postalCode').notNullable()
        table.string('managerName').notNullable()
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
  return knex.schema.hasTable('shops').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('shops')
    }
  })
}
