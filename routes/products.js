const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/products");
const checkAuth = require('../middleware/check-auth');


router.get('/', checkAuth, ProductController.getProducts);

router.get('/:productId', checkAuth,  ProductController.getProductById);

router.post('/add',checkAuth,  ProductController.addProduct);

router.patch('/:productId', checkAuth, ProductController.updateProduct);

router.delete('/:productId', checkAuth, ProductController.deleteProduct);

module.exports = router;