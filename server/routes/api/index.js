const router = require('express').Router()


router.get('/test', (req, res) => {
    res.send('<h1>API Status [<span style="color: green">OK</span>]</h1>');
})


router.use('/shirts', require('./shirts.js'))
router.use('/payments', require('./payments.js'))

module.exports = router