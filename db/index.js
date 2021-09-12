const connection = require('./connection');

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  addDepartment(department) {
    return this.connection.promise()
      .query("INSERT INTO department SET ?", department);
  }

  addRole(role) {
    return this.conenection.promise()
      .query("INSERT INTO role SET ?", role);
  }

  addEmployee(employee) {
    return this.connection.promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  viewDepartment() {
    return this.connection.promise()
    .query("SELECT department.id, department.name FROM department;");
  }

  viewRole() {
    return this.connection.promise()
    .query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");
  }
  
  viewEmployee() {
    return this.connection.promise()
    .query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
  }
}

module.exports = new DB(connection);