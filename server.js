const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = require('./db/connection');

const {
  initialQuestion,
  addDepartmentQs,
  addRoleQs,
  addEmployeeQs
} = require('./utils/questions');

function init() {
  inquirer
    .prompt(initialQuestion)
    // .then
    // .catch(err => console.log(err))
}

init();