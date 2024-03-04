const knex = require('../config')

const create = (body) => {
  return knex
    .insert(body) //  What data am I going to insert?
    .into('products') // On which table?
    .returning('*') // What data will I return?, * Means all or can be done individually as the following comment
    // .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

module.exports = {
  create
}
