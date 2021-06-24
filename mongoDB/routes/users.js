const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const checkAuth = require('../../middleware/check-auth');

router.post('/login', UsersController.login);

router.post('/register', UsersController.register);

router.get('/', checkAuth, UsersController.getUsers);

router.get('/forgotpassword', (req, res) => {
    res.send("forgotpassword page")
});

module.exports = router;