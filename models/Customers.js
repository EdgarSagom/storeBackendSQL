const knex = require('../config')

const create = (body) => {
  return knex
    .insert(body)
    .into('customers')
    .returning('*')
}

const findAll = (body) => {
  return knex
    .select('*')
    .from('customers')
    .where('active', true)
}

const findOne = (idCustomer) => {
  return knex
    .select('*')
    .from('customers')
    .where('customer_id', idCustomer)
    .where('active', true)
}

const update = (idCustomer, body) => {
  return knex
    .update(body)
    .from('customers')
    .where('customer_id', idCustomer)
    .returning('*')
}

const destroy = (idCustomer) => {
  return knex
    .del()
    .from('customers')
    .where('customer_id', idCustomer)
}

const softDelete = (idCustomer) => {
  return knex
    .update({ active: false })
    .from('customers')
    .where('customer_id', idCustomer)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
