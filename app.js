const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000
const db = require('./database.js');




app.use(express.static(path.resolve(__dirname, 'client', 'build')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))




require('./routes')(app)



app.listen(PORT, () => {
    console.log('Node server is running on PORT:', PORT)
})