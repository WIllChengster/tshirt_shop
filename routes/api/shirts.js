const router = require('express').Router();
const db = require('../../database.js');

router.get('/all', (req,res) => {
    db.query('SELECT * from shirts', (err, dbRes) => {
        if(err) throw err;
        res.send(dbRes)
    })
})

router.post('/exact_id', (req, res) => {
    console.log(req.body);
    db.query(`SELECT * from shirts WHERE shirt_id = ${req.body.id}`, (err, dbRes) => {
        if(err) throw err;
        res.send(dbRes[0])
    })
})


module.exports = router;