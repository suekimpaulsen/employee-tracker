const inquirer = require("inquirer");
const db = require("./db");

const {
  initialQuestion,
  addDepartmentQs,
  // addRoleQs,
  // addEmployeeQs
} = require("./utils/questions");

function init() {
  initialPrompt();
}
function initialPrompt() {
  inquirer
    .prompt(initialQuestion)
    .then(res => {
      switch (res.initialQuestion) {
        case "ADD_DEPARTMENT":
          addDepartment();
          break;
        case "ADD_ROLE":
          addRole();
          break;
        case "ADD_EMPLOYEE":
          addEmployee();
          break;
        case "VIEW_DEPARTMENT":
          viewDepartment();
          break;
        case "VIEW_ROLE":
          viewRole();
          break;
        case "VIEW_EMPLOYEE":
          viewEmployee();
          break;
        default:
          quit();
      }
    })
    .catch(err => console.log(err))
}

function viewDepartment() {
  db.viewDepartment()
    .then(([rows]) => {
      const departments = rows;
      console.table(departments);
    })
    .then(() => initialPrompt());
}

function viewRole() {
  db.viewRole()
    .then(([rows]) => {
      const roles = rows;
      console.table(roles);
    })
    .then(() => initialPrompt());
}

function viewEmployee() {
  db.viewEmployee()
    .then(([rows]) => {
      const employees = rows;
      console.table(employees);
    })
    .then(() => initialPrompt());
}

function addDepartment() {
  inquirer
    .prompt(addDepartmentQs)
    .then(res => {
      const name = res;
      db.addDepartment(name)
        .then(() => console.log(`${name.name} added`))
        .then(() => initialPrompt())
    })
}

function addRole() {}

function addEmployee() {}

function quit() {
  console.log("Done");
  process.exit();
}

init();