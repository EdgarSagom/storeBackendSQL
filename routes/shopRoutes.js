const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

router.post('/shops', shopController.createShop)
router.get('/shops', shopController.findAllShops)
router.get('/shops/:idShop', shopController.findOneShop)
router.patch('/shops/:idShop', shopController.updateShop)
router.delete('/shops/destroy/:idShop', shopController.destroyShop)
router.delete('/shops/:idShop', shopController.softDeleteShop)

module.exports = router
