// require all these modules
const inquirer = require("inquirer");
const consoleTable = require('console.table');
const mysql2 = require('mysql2');


//setting up database connection here
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "complete_company_db"
});









// need to create a function to display the main menu using Inquirer. This function should prompt the user with the available options (view all departments, view all roles, etc.) and call the corresponding functions based on user input.


// functions I need to make:    one to view all departments, which retrieves department data from the database and displays it as a formatted table.    one to view all roles, which retrieves role data from the database and displays it as a formatted table.   one to  view all employees, which retrieves employee data from the database and displays it as a formatted table.   one to add a department, which prompts the user for the department name and inserts it into the database.   one to add a role, which prompts the user for the role name, salary, and department and inserts it into the database.  one to add an employee, which prompts the user for the employee's first name, last name, role, and manager and inserts it into the database.  one to update an employee role, which prompts the user to select an employee and their new role and updates the database accordingly.

// need to start the application by calling the main menu function.