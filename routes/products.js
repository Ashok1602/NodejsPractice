const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/products");


router.get('/', ProductController.getProducts);

router.get('/:productId', ProductController.getProductById);

router.post('/add', ProductController.addProduct);

router.patch('/:productId', ProductController.updateProduct);

router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;