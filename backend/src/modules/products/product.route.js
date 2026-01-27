const express = require("express")
const { getAllProductsController, createProductController, getProductByIdController } = require("./product.controller")


const router = express.Router()

router.get('/',  getAllProductsController)
router.get('/:id', getProductByIdController)
router.post('/',  createProductController)

module.exports = router