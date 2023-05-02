const inquirer = require("inquirer");
const { getAllDepartments, getAllRoles, getAllManagers } = require("./queries");

const mainMenu = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "menuSelections",
      message:
        "What would you like to do? (Arrow up or down to see more options)",
      choices: [
        "View all employees",
        "Add an employee",
        "Update an employee roles",
        "View all roless",
        "Add a roles",
        "View all departments",
        "Add department",
        "Quit",
      ],
    },
  ]);
};

const addADepartment = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "department_name",
      message: "What is the name of the new department?",
    },
  ]);
};

const addAroles = async () => {
  const departments = await getAllDepartments();
  return inquirer.prompt([
    {
      type: "input",
      name: "rolesName",
      message: "What is the name of the new roles?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for this new roles?",
    },
    {
      type: "list",
      name: "department_id",
      message: "What department will this new roles be added to?",
      choices: departments.map((department) => ({
        name: department.department_name,
        value: department.id,
      })),
    },
  ]);
};

const addAnEmployee = async () => {
  const roles = await getAllRoles();
  const managers = await getAllManagers();
  return inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is this employee's last name?",
    },
    {
      type: "list",
      name: "roles",
      message: "What is the employee's roles?",
      choices: roles.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the new employee's manager?",
      choices: managers.map((manager) => ({
        name: `${manager.first_name} ${manager.last_name}`,
        value: manager.id,
      })),
    },
  ]);
};

const updateEmployee = async () => {
  const roles = await getAllRoles();
  const managers = await getAllManagers();
  return inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is this employee's last name?",
    },
    {
      type: "list",
      name: "roles",
      message: "What is the employee's new role?",
      choices: roles.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the employee's new manager?",
      choices: managers.map((manager) => ({
        name: `${manager.first_name} ${manager.last_name}`,
        value: manager.id,
      })),
    },
  ]);
};

module.exports = {
  mainMenu,
  addADepartment,
  addAroles,
  addAnEmployee,
  updateEmployee,
};
