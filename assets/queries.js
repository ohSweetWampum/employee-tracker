
const promiseConnection = require('./connector');


const viewAllEmployees = async () => {
  const [rows] = await promiseConnection.query('SELECT * FROM employee');
  console.table(rows);
};

const addAnEmployee = async (employeeData) => {
  await promiseConnection.query('INSERT INTO employee SET ?', employeeData);
  console.log(`Employee ${employeeData.firstName} ${employeeData.lastName} added successfully.`);
};

const updateEmployee = async (employeeData) => {
  await promiseConnection.query('UPDATE employee SET role_id = ? WHERE id = ?', [employeeData.role_id, employeeData.employee_id]);
  console.log(`Employee ${employeeData.firstName} ${employeeData.lastName} updated successfully.`);
};

const viewAllRoles = async () => {
  const [rows] = await promiseConnection.query('SELECT * FROM role');
  console.table(rows);
};

const addARole = async (roleData) => {
  await promiseConnection.query('INSERT INTO role SET ?', roleData);
  console.log(`Role ${roleData.title} added successfully.`);
};

const viewAllDepartments = async () => {
  const [rows] = await promiseConnection.query('SELECT * FROM department');
  console.table(rows);
};

const addADepartment = async (departmentData) => {
  await promiseConnection.query('INSERT INTO department SET ?', departmentData);
  console.log(`Department ${departmentData.name} added successfully.`);
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
