const router = require('express').Router();
const keys = require('../../keys.js');
const stripe = require('stripe')(keys.stripe);


router.post('/paymentIntent', (req, res) => {
	(async () => {
		const { cart } = req.body
		let total = 0;
		for( let i = 0; i < cart.length; i++){
			total += cart[i].price
		}

		const paymentIntent = await stripe.paymentIntents.create({
			amount: total,
			currency: 'usd',
		});
		res.send(paymentIntent.client_secret)
	})();
})

router.post('/completePurchase', (req, res) => {
	console.log(req.body)
})



module.exports = router;