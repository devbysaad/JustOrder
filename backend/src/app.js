const express = require('express');
const productRoute = require('./modules/products/product.route');
const authRoute = require('./modules/auth/auth.route');

const app = express.Router();

app.use('/product', productRoute);

module.exports = app;
