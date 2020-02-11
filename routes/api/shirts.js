const router = require('express').Router();
const db = require('../../database.js');

router.get('/all', (req,res) => {
    db.query('SELECT * from shirts', (err, dbRes) => {
        if(err) throw err;
        res.send(dbRes)
    })
})


module.exports = router;