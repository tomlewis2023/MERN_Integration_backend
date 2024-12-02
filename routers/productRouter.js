const express = require('express')
const ProductRouter = express.Router()
const {getProducts} = require('../controllers/productController')


//localhost:3000/products
ProductRouter.get('/', getProducts)

module.exports = ProductRouter