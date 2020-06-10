const express = require('express')
const routes = express.Router()


const ProductController = require('./controllers/ProductController')


//Primeira Roda
routes.get('/products', ProductController.index);

module.exports = routes