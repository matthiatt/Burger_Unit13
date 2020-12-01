var mysql = require("mysql");

var burgerJawConnection = mysql.createConnection(
  process.env.JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db",
  }
);

burgerJawConnection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + burgerJawConnection.threadId);
});

module.exports = burgerJawConnection;
