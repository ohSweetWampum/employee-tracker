
const inquirer = require('inquirer'); 
const prompts = require('./assets/prompts');
const queries = require('./assets/queries');

//main menu function
function mainMenuFunction() {
  inquirer.prompt(prompts.mainMenu()) 
    .then((responses) => {
      switch (responses.menuSelections) {
        case "View all employees": functionDirectory['View all employees'](); 
        break;
        case "Add an employee": functionDirectory['Add an employee'](); 
        break;
        case "Update an employee role": functionDirectory['Update an employee role'](); 
        break;
        case "View all roles": functionDirectory['View all roles']();
        break;
        case "Add a role": functionDirectory['Add a role'](); 
        break;
        case "View all departments": functionDirectory['View all departments'](); 
        break;
        case "Add department": functionDirectory['Add department']();
        break;
        case "Quit": functionDirectory['Quit'](); 
        break;
      }
    })
}
//"look up table" that directs to a particular function in the queries.js file, based off the users selection, the specific function is then executed
const functionDirectory = {
  'View all employees': queries.viewAllEmployees,
  'Add an employee': async () => {
    const employeeData = await prompts.addAnEmployee();
    await queries.addAnEmployee(employeeData);
  },
  'Update an employee role': async () => {
    const updateData = await prompts.updateEmployee();
    await queries.updateEmployee(updateData);
  },
  'View all roles': queries.viewAllRoles,
  'Add a role': async () => {
    const roleData = await prompts.addARole();
    await queries.addARole(roleData);
  },
  'View all departments': queries.viewAllDepartments,
  'Add department': async () => {
    const departmentData = await prompts.addADepartment();
    await queries.addADepartment(departmentData);
  },
  'Quit': async () => {
    console.log("Exiting...");
    process.exit();
  }
};

mainMenuFunction();
