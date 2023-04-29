const mysql2 = require('mysql2');


//setting up database connection here
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "NewPath88!",
    database: "complete_company_db"
});

const promiseConnection = db.promise();

module.exports = promiseConnection;