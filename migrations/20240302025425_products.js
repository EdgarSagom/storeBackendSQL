/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('products', function (table) {
        table.increments('product_id').primary() // primary() means it's the primary key
        table.string('name').notNullable() // notNullable() that is, it cannot be left empty (null)
        table.text('description')
        table.decimal('price')
        table.text('sku')
        table.boolean('active').notNullable().defaultTo(true) // defaultTo() means a default value
        table.timestamp('created_at').defaultTo(knex.fn.now()) // fn.now() It's a knex function that gives us the current date and time
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('products')
    }
  })
}
