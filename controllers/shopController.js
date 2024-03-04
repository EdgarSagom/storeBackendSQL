const ModelShops = require('../models/Shops')

const createShop = (req, res) => {
  ModelShops.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Shop Created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating shop', err })
    })
}

const findAllShops = (req, res) => {
  ModelShops.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing shops', err })
    })
}

const findOneShop = (req, res) => {
  ModelShops.findOne(req.params.idShop)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing shop', err })
    })
}

const updateShop = (req, res) => {
  ModelShops.update(req.params.idShop, req.body)
    .then(row => {
      res.status(200).send({ message: 'Shop Updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating shop', err })
    })
}

const destroyShop = (req, res) => {
  ModelShops.destroy(req.params.idShop)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying shop', err })
    })
}

const softDeleteShop = (req, res) => {
  ModelShops.softDelete(req.params.idShop)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error deleting shop', err })
    })
}

module.exports = {
  createShop,
  findAllShops,
  findOneShop,
  updateShop,
  destroyShop,
  softDeleteShop
}
