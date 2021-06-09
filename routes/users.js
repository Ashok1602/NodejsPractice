const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send("login page")
});

router.get('/register', (req, res) => {
    res.send("registration page")
});

router.get('/forgotpassword', (req, res) => {
    res.send("forgotpassword page")
});

module.exports = router;