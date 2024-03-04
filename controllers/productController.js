const ModelProducts = require('../models/Products')

const createProduct = (req, res) => {
  ModelProducts.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Product Created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating product', err })
    })
}

module.exports = {
  createProduct
}
