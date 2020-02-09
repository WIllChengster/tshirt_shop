const router = require('express').Router();
const keys = require('../../keys.js');
const stripe = require('stripe')(keys.stripe);






module.exports = router;