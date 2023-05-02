const promiseConnection = require("./connector");
// const seedSqlPath = path.join(__dirname, '..', 'db', 'seed.sql');

// const fs = require("fs");
// const path = require("path");

// const seedDatabase = async () => {
//   try {
//     const seedSqlPath = path.join(__dirname, "..", "db", "seed.sql");
//     const seedSql = fs.readFileSync(seedSqlPath, "utf8");
//     await promiseConnection.query(seedSql);
//     console.log("Database seeded successfully");
//   } catch (error) {
//     console.error(`Error seeding database: ${error.message}`);
//   }
//};

const viewAllEmployees = async () => {
  const [rows] = await promiseConnection.query(`
    SELECT employees.first_name, employees.last_name, employees.manager_id, roles.title, roles.salary, department.department_name as department_name
    FROM employees
    INNER JOIN roles ON employees.roles_id = roles.id 
    INNER JOIN department ON roles.department_id = department.id;
  `);
  console.table(rows);
};

const addAnEmployee = async (employeeData) => {
  try {
    const roles_id = await getrolesIdByName(employeeData.roles);
    const employee = {
      first_name: employeeData.firstName,
      last_name: employeeData.lastName,
      roles_id: roles_id,
      manager_id: employeeData.manager,
    };

    await promiseConnection.query("INSERT INTO employees SET ?", employee);
    console.log(
      `Employee ${employeeData.firstName} ${employeeData.lastName} added successfully.`
    );
  } catch (error) {
    console.error(`Error adding employee: ${error.message}`);
  }
};

const updateEmployee = async (updateData) => {
  await promiseConnection.query(
    "UPDATE employees SET roles_id = ?, manager_id = ? WHERE id = ?",
    [updateData.roles_id, updateData.manager_id, updateData.employee_id]
  );

  console.log(
    `Employee with ID ${updateData.employee_id} updated successfully.`
  );
};

const viewAllroles = async () => {
  const [rows] = await promiseConnection.query("SELECT * FROM roles");
  console.table(rows);
};

const addAroles = async (rolesData) => {
  await promiseConnection.query("INSERT INTO roles SET ?", rolesData.rolesName);
  console.log(`roles ${rolesData.rolesName} added successfully.`);
};

const viewAllDepartments = async () => {
  const [rows] = await promiseConnection.query("SELECT * FROM department");
  console.table(rows);
};

const addADepartment = async (departmentData) => {
  await promiseConnection.query(
    "INSERT INTO department (department_name) VALUES (?)",
    [departmentData.department_name]
  );

  console.log(
    `Department ${departmentData.department_name} added successfully.`
  );
};

const getrolesIdByName = async (rolesName) => {
  try {
    const [rows] = await promiseConnection.query(
      "SELECT id FROM roles WHERE title = ?",
      [rolesName]
    );
    if (rows.length === 0) {
      throw new Error(`roles not found: ${rolesName}`);
    }
    return rows[0].id;
  } catch (error) {
    console.error(`Error getting roles ID: ${error.message}`);
    throw error;
  }
};
const getAllDepartments = async () => {
  const [rows] = await promiseConnection.query("SELECT * FROM department");
  return rows;
};

const getAllRoles = async () => {
  const [rows] = await promiseConnection.query("SELECT * FROM roles");
  return rows;
};

const getAllManagers = async () => {
  const [rows] = await promiseConnection.query(`
    SELECT id, first_name, last_name
    FROM employees
    WHERE id IN (SELECT DISTINCT manager_id FROM employees WHERE manager_id IS NOT NULL)
  `);
  return rows;
};

module.exports = {
  viewAllEmployees,
  addAnEmployee,
  updateEmployee,
  viewAllroles,
  addAroles,
  viewAllDepartments,
  addADepartment,
  // seedDatabase,
  getAllDepartments,
  getAllRoles,
  getAllManagers,
};
