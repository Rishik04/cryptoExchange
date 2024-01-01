const express = require('express');
const { getCurrency, getExchangeRate } = require('../controllers/currencyCOntroller');

const router = express.Router();

router.get('/currency', getCurrency);
router.get("/get-rate", getExchangeRate);

module.exports = {
    router
}