const initialQuestion = [
  {
    type: "list",
    name: "initialQuestion",
    message: "Please select ONE of the options",
    choices: [
      {
        name: "Add a department",
        value: "ADD_DEPARTMENT"
      },
      {
        name: "Add a role",
        value: "ADD_ROLE"
      },
      {
        name: "Add an employee",
        value: "ADD_EMPLOYEE"
      },
      {
        name: "View all deaprtments",
        value: "VIEW_DEPARTMENT"
      },
      {
        name: "View all roles",
        value: "VIEW_ROLE"
      },
      {
        name: "View all employees",
        value: "VIEW_EMPLOYEE"
      },
      {
        name: "Quit",
        value: "QUIT"
      }
    ]
  }
]

const addDepartmentQs = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the department",
    validate: name => {
      if (name) {
        return true;
      } else {
        console.log("Please enter the new depeartment name");
        return false;
      }
    }
  }
]

const addRoleQs = [
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
    name: "salary"
  },
  {
    type: "list",
    name: "department"
  }
]

const addEmployeeQs = [
  {
    type: "input",
    name: "firstName"
  },
  {
    type: "input",
    name: "lastName"
  },
  {
    type: "list",
    name: "department"
  },
  {
    type: "input",
    name: "managerFirstName"
  },
  {
    type: "input",
    name: "managerLastName"
  }
]

module.exports = {
  initialQuestion,
  addDepartmentQs,
  addRoleQs,
  addEmployeeQs
}