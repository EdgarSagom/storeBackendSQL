const knex = require('../config')

const create = (body) => {
  return knex
    .insert(body) //  What data am I going to insert?
    .into('products') // On which table?
    .returning('*') // What data will I return?, * Means all or can be done individually as the following comment
    // .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('products')
    .where('active', true)
}

const findOne = (idProduct) => {
  return knex
    .select('*')
    .from('products')
    .where('product_id', idProduct)
    .where('active', true)
}

const update = (idProduct, body) => {
  return knex
    .update(body)
    .from('products')
    .where('product_id', idProduct)
    .returning('*')
}

const destroy = (idProduct) => {
  return knex
    .del()
    .from('products')
    .where('product_id', idProduct)
}

const softDelete = (idProduct) => {
  return knex
    .update({ active: false })
    .from('products')
    .where('product_id', idProduct)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
