const express = require('express');
const router = express.Router();

const categoryRoutes = require('./category.routes');
const productsRoutes = require('./product.routes');
const noRoute = require('./no.route');
const logRoute = require('./log.route');

router.use(logRoute);
router.use('/category', categoryRoutes);
router.use('/product', productsRoutes);
router.use(noRoute);

module.exports = router;