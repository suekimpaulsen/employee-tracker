const initialQuestion = [
  {
    type: 'list',
    name: 'initalQuestion',
    message: 'Please select ONE of the options',
    choices: [
      'Add a department',
      'Add a role',
      'Add an employee',
      'View all departments',
      'View all roles',
      'View all employees'
    ]
  }
]

const addDepartmentQs = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter the name of the department',
    validate: name => {
      if (name) {
        return true;
      } else {
        console.log('Please enter the new depeartment name');
        return false;
      }
    }
  }
]

const addRoleQs = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter the name of the role',
    validate: name => {
      if (name) {
        return true;
      } else {
        console.log('Please enter the new role');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'salary'
  },
  {
    type: 'list',
    name: 'department'
  }
]

const addEmployeeQs = [
  {
    type: 'input',
    name: 'firstName'
  },
  {
    type: 'input',
    name: 'lastName'
  },
  {
    type: 'list',
    name: 'department'
  },
  {
    type: 'input',
    name: 'managerFirstName'
  },
  {
    type: 'input',
    name: 'managerLastName'
  }
]

module.exports = {
  initialQuestion,
  addDepartmentQs,
  addRoleQs,
  addEmployeeQs
}