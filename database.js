const mysql = require('mysql');
let con;

const connectDatabase = () => {

    if(!con){
        con = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "root",
            port: 8889,
            database: 'tshirt_shop'
        });

        con.getConnection( (err, connection) => {
            if(err) throw err;
            console.log('Connected to MySQL DB!')
        })
    }

    return con
}


module.exports = connectDatabase();