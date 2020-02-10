const router = require('express').Router();
const keys = require('../../keys.js');
const stripe = require('stripe')(keys.stripe);


router.post('/request', (req, res) => {
    
})



module.exports = router;