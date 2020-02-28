const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const db = require('./database');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const keys = require('./keys')

app.use(express.static(path.resolve(__dirname, '..', 'react', 'build')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


require('./routes')(app)



app.listen(PORT, () => {
    console.log('Node server is running on PORT:', PORT)
});