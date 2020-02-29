const mysql = require('mysql');
let con;

const connectDatabase = () => {

    if(!con){
        con = mysql.createPool({
            host: "mysql",
            user: "root",
            password: "rootpassword",
            port: 3306,
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