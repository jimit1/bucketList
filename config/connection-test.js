const mysql = require("mysql");
const password = require("./pw");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Popover2020!",
    database: "todo_test_db",
  });
}

module.exports = connection;
