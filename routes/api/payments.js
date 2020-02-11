const router = require('express').Router();
const keys = require('../../keys.js');
const stripe = require('stripe')(keys.stripe);


router.post('/request', (req, res) => {
    var paymentRequest = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1000,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

    //   paymentRequest.canMakePayment().then(result => {
    //     console.log(result);
    //   })

})



module.exports = router;