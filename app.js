const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000
const mysql = require('mysql');





app.use(express.static(path.resolve(__dirname, 'client', 'build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build'), 'index.html')
// })

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


require('./routes')(app)



app.listen(PORT, () => {
    console.log('Node server is running on PORT:', PORT)
})