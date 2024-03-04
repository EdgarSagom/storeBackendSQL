const ModelCustomers = require('../models/Customers')

const createCustomer = (req, res) => {
  ModelCustomers.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Customer Created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating customer', err })
    })
}

const findAllCustomers = (req, res) => {
  ModelCustomers.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing customers', err })
    })
}

const findOneCustomer = (req, res) => {
  ModelCustomers.findOne(req.params.idCustomer)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing customer', err })
    })
}

const updateCustomer = (req, res) => {
  ModelCustomers.update(req.params.idCustomer, req.body)
    .then(row => {
      res.status(200).send({ message: 'Customer Updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating customer', err })
    })
}

const destroyCustomer = (req, res) => {
  ModelCustomers.destroy(req.params.idCustomer)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying customer', err })
    })
}

const softDeleteCustomer = (req, res) => {
  ModelCustomers.softDelete(req.params.idCustomer)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error deleting customer', err })
    })
}

module.exports = {
  createCustomer,
  findAllCustomers,
  findOneCustomer,
  updateCustomer,
  destroyCustomer,
  softDeleteCustomer
}
