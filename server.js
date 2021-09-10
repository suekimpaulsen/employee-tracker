const inquirer = require('inquirer');
const db = require('./db');

const {
  initialQuestion,
  addDepartmentQs,
  addRoleQs,
  addEmployeeQs
} = require('./utils/questions');

function init() {
  inquirer
    .prompt(initialQuestion)
    .then(res => {
      const choice = res.choice;

      switch (choice) {
        case 'ADD_DEPARTMENT':
          addDepartment();
          break;
        case 'ADD_ROLE':
          addRole();
          break;
        case 'ADD_EMPLOYEE':
          addEmployee();
          break;
        default:
          quit();
      }
    })
    .catch(err => console.log(err))
}

function addDepartment() {
  inquirer
    .prompt(addDepartmentQs)
    .then(res => {
      const name = res;
      db.addDepartment(name)
        .then(() => console.log(`${name.name} added`))
        .then(() => init())
    })
}

function addRole() {}

function addEmployee() {}

function quit() {
  console.log('Done');
  process.exit();
}

init();