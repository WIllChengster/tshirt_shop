const mysql = require('mysql');
const keys = require('./keys')
let con;

const connectDatabase = () => {

    if(!con){
        con = mysql.createPool({
            host: keys.mysql.host,
            user: keys.mysql.user,
            password: keys.mysql.password,
            port: keys.mysql.port,
            database: keys.mysql.database
        });

        con.getConnection( (err, connection) => {
            if(err) throw err;
            console.log('Connected to MySQL DB!')
        })
    }

    return con
}


module.exports = connectDatabase();