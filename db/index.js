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
  // viewRole() {
  //   return this.connection.promise()
  //   .query();
  // }
  // viewEmployee() {
  //   return this.connection.promise().query();
  // }
}

module.exports = new DB(connection);