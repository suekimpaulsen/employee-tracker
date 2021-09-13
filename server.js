const inquirer = require("inquirer");
const db = require("./db");

const {
  initialQuestion,
  addDepartmentQs,
  addEmployeeQs
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

function addRole() {
  db.viewDepartment()
    .then(([rows]) => {
      const departments = rows;
      const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
      }));
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Please enter the name of the role",
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log("Please enter the new role");
                return false;
              }
            }
          },
          {
            type: "input",
            name: "salary",
            message: "Please enter the salary of the role"
          },
          {
            type: "list",
            name: "department",
            message: "Please select the department that the role belongs to",
            choices: departmentChoices
          }
        ])
        .then(res => {
          const role = res;
          db.addRole(role)
            .then(() => console.log(`${role.name} added`))
            .then(() => initialPrompt())
        })
    })
}

function addEmployee() {
  inquirer
    .prompt(addEmployeeQs)
    .then(res => {
      db.viewRole()
        .then(([rows]) => {
          const roles = rows;
          const roleChoices = roles.map(({ id, name }) => ({
            name: name,
            value: id
          }));
          inquirer
            .prompt({
              type: "list",
              name: "role",
              message: "Please selecet the employee's role",
              choices: roleChoices
            })
            .then(res => {
              const name = res;
              db.addEmployee(name)
                .then(() => console.log(`${name.name} added`))
                .then(() => initialPrompt())
            })
        })
    })
}

function quit() {
  console.log("Done");
  process.exit();
}

init();