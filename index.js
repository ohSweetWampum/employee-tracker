// require all these modules

const prompts = require('./assets/prompts');
const queries = require('./assets/queries');

const menuActions = {
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
    return true;
  }
};

const main = async () => {
  let exitApp = false;

  while (!exitApp) {
    const { menuSelections } = await prompts.mainMenu();
    const action = menuActions[menuSelections];
    if (action) {
      exitApp = await action();
    }
  }
};

main();
