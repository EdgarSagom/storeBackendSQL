/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('invoices').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('invoices', function (table) {
        table.increments('invoice_id').primary()
        table.integer('sales_id').unsigned().references('sales.sales_id')
        table.integer('customer_id').unsigned().references('customers.customer_id')
        table.integer('shop_id').unsigned().references('shops.shop_id')
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('invoices').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('invoices')
    }
  })
}
