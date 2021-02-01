const mysql2 = require('mysql2');

// This dbConnection is to be used with the routes
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'private_school',
    password: '1234',
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