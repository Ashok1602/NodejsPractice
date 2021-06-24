const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/orders");
const checkAuth = require('../../middleware/check-auth');

router.get('/', OrderController.getOrders);

router.get('/:orderId', OrderController.getOrderById);

router.post('/add', OrderController.addOrder);

router.patch('/:orderId', OrderController.updateOrder);

router.delete('/:orderId', OrderController.deleteOrder);

module.exports = router;