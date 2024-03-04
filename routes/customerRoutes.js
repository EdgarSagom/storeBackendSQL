const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

router.post('/customers', customerController.createCustomer)
router.get('/customers', customerController.findAllCustomers)
router.get('/customers/:idCustomer', customerController.findOneCustomer)
router.patch('/customers/:idCustomer', customerController.updateCustomer)
router.delete('/customers/destroy/:idCustomer', customerController.destroyCustomer)
router.delete('/customers/:idCustomer', customerController.softDeleteCustomer)

module.exports = router
