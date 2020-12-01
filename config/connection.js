var mysql = require("mysql");

var burgerJawConnection = mysql.createPool(
  process.env.JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db",
  }
);

burgerJawConnection.getConnection(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

module.exports = burgerJawConnection;
