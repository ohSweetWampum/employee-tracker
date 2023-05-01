
const inquirer = require('inquirer');



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



const addADepartment =  () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'department_name',
      message: 'What is the name of the new department?'
    }
  ]);
};



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
        name: 'department_id',
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











module.exports = {
    mainMenu,
    addADepartment,
    addARole,
    addAnEmployee,
    updateEmployee
};