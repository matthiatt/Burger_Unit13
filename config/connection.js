// setup the code to connect Node to MySQL.
// Export the connection.

// Used example from the cats example in class.
const mysql = require("mysql");

if (process.env.PORT) {
    connection = mysql.createConnection(process.env.PORT);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

connection.connect();

module.exports = connection;