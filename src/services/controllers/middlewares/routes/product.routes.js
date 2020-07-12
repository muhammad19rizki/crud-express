const express = require('express');
const router = express.Router();
const ProductService = require('../../../product.service');
const { getProductList, getProductById, saveDataProduct, updateDataProduct, deleteDataProduct } = require('../../product.controller');

const productService = new ProductService();

router.get('/', (req, res, next) => getProductList(req, res, productService));
router.get('/:id_product', (req, res, next) => getProductById(req, res, productService));
router.post("/", (req, res, next) => saveDataProduct(req, res, productService));
router.put("/", (req, res, next) => updateDataProduct(req, res, productService));
router.delete('/:id_product', (req, res, next) => deleteDataProduct(req, res, productService));
module.exports = router;