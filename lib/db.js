const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'private_school',
    port: '3306'
})

connection.connect((error) => {
    if (error) {
        console.log("");
    } else {
        console.log("CONNECTED to DATABASE");
    }
});



module.exports = connection;