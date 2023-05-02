const prompts = require("./assets/prompts");
const queries = require("./assets/queries");

(async () => {
  try {
    await queries.viewAllEmployeesWithTitles();
  } catch (err) {
    console.error("Error:", err);
  }
})();

// mainMenuFunction();
const functionDirectory = {
  "View all employees": queries.viewAllEmployees,
  "Add an employee": async () => {
    const employeeData = await prompts.addAnEmployee();
    await queries.addAnEmployee(employeeData);
  },
  "Update an employee roles": async () => {
    const updateData = await prompts.updateEmployee();
    await queries.updateEmployee(updateData);
  },
  "View all roles": queries.viewAllroles,
  "Add a roles": async () => {
    const rolesData = await prompts.addAroles();
    await queries.addAroles(rolesData);
  },
  "View all departments": queries.viewAllDepartments,
  "Add department": async () => {
    const departmentData = await prompts.addADepartment();
    await queries.addADepartment(departmentData);
  },
  Quit: async () => {
    console.log("Exiting...");
    process.exit();
  },
};

async function mainMenuFunction() {
  try {
    const responses = await prompts.mainMenu();
    const selectedFunction = functionDirectory[responses.menuSelections];
    if (typeof selectedFunction === "function") {
      await selectedFunction();
    }
    mainMenuFunction();
  } catch (error) {
    console.error("Error:", error);
  }
}

mainMenuFunction();
