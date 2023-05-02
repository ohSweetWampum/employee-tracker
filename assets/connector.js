// Import the mysql2 library
const mysql2 = require("mysql2");

// Setting up the database connection
const db = mysql2.createConnection({
  host: "localhost", // hostname of the database server
  user: "root", //  MySQL user to authenticate as
  password: "NewPath88!", // My password for MySQL
  database: "complete_company_db", // database to use for the connection
  multipleStatements: true,
});

// Createing a promise based connection object
const promiseConnection = db.promise();

// Exporting the above promise based connection object
module.exports = promiseConnection;
