const knex = require('../config')

const create = (body) => {
  return knex
    .insert(body)
    .into('shops')
    .returning('*')
}

const findAll = () => {
  return knex
    .select('*')
    .from('shops')
    .where('active', true)
}

const findOne = (idShop) => {
  return knex
    .select('*')
    .from('shops')
    .where('shop_id', idShop)
    .where('active', true)
}

const update = (idShop, body) => {
  return knex
    .update(body)
    .from('shops')
    .where('shop_id', idShop)
    .returning('*')
}

const destroy = (idShop) => {
  return knex
    .del()
    .from('shops')
    .where('shop_id', idShop)
}

const softDelete = (idShop) => {
  return knex
    .update({ active: false })
    .from('shops')
    .where('shop_id', idShop)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
