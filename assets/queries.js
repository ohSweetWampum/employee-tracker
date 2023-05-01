const consoleTable = require('console.table');
const promiseConnection = require('./connector');


const viewAllEmployees = async () => {
  const [rows] = await promiseConnection.query(`
    SELECT employees.first_name, employees.last_name, employees.manager_id, role.title, role.salary, department.department_name as department_name
    FROM employees
    INNER JOIN role ON employees.role_id = role.id 
    INNER JOIN department ON role.department_id = department.id;
  `);
  consoleTable(rows);
};


const addAnEmployee = async (employeeData) => {
  await promiseConnection.query('INSERT INTO employees SET ?', employeeData);
  console.log(`Employees ${employeeData.firstName} ${employeeData.lastName} added successfully.`);
};

const updateEmployee = async (updateData) => {
  await promiseConnection.query('UPDATE employees SET role_id = ?, manager_id = ? WHERE id = ?', [
    updateData.role,
    updateData.manager,
    updateData.lastName,
    updateData.firstName
  ]);
  console.log(`Employee with ID ${updateData.employee_id} updated successfully.`);
};


const viewAllRoles = async () => {
  const [rows] = await promiseConnection.query('SELECT * FROM role');
  consoleTable(rows);
};

const addARole = async (roleData) => {
  await promiseConnection.query('INSERT INTO role SET ?', roleData.roleName);
  console.log(`Role ${roleData.roleName} added successfully.`);
};

const viewAllDepartments = async () => {
  const [rows] = await promiseConnection.query('SELECT * FROM department');
  consoleTable(rows);
};

const addADepartment = async (departmentData) => {
  await promiseConnection.query('INSERT INTO department (department_name) VALUES (?)', [departmentData.department_name]);

  console.log(`Department ${departmentData.department_name} added successfully.`);
};


module.exports = {
  viewAllEmployees,
  addAnEmployee,
  updateEmployee,
  viewAllRoles,
  addARole,
  viewAllDepartments,
  addADepartment
};
