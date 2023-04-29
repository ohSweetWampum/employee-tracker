//import required packages
const inquirer = require('inquirer');

//need to link my queries.js file to this which will handle/preform the database queries based off the user selctions
const queriesFile = require('./queries'); 

//main menu options
const mainMenu =  () => {
    return inquirer.prompt([
    {
      type: 'list',
      name: 'menuSelections',
      message: 'What would you like to do? (Arrow up or down to see more options)',
      choices: [
        'View all employees',
        'Add an employee',
        'Update an employee role',
        'View all roles',
        'Add a role',
        'View all departments',
        'Add department',
        'Quit'
      ]
    }
  ]);
};


//add department prompt
const addADepartment =  () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'addDepartment',
      message: 'What is the name of the new department?'
    }
  ]);
};


//add role prompt
const addARole =  () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'roleName',
      message: 'What is the name of the new role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this new role?'
      },
      {
        type: 'list',
        name: 'department',
        message: 'What department will this new role be added to?',
        choices: [
            'Engineering',
            'Finance',
            'Legal',
            'Sales',
            'Service',
          ]
      }
  ]);
};


//add employee prompt
const addAnEmployee =  () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is this employee's last name?"
      },
      {
        type: 'input',
        name: 'role',
        message: 'What department will this new employee work in?'
      },
      {
        type: 'input',
        name: 'manager',
        message: "Who is the new employee's manager?"
      },
  ]);
};


//update employee info
const updateEmployee =  () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is this employee's last name?"
      },
      {
        type: 'input',
        name: 'role',
        message: 'What department will this new employee work in?'
      },
      {
        type: 'input',
        name: 'manager',
        message: "Who is the new employee's manager?"
      },
  ]);
};










//Need to export this prompts for use in other files
module.exports = {
    mainMenu,
    addADepartment,
    addARole,
    addAnEmployee,
    updateEmployee
};