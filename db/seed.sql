USE employee_db;

INSERT INTO department (name)
VALUES
  ("Content"),
  ("Engineering"),
  ("Sales"),
  ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES
  ("Editor", 100, 1),
  ("Font-End Developer", 200, 2),
  ("Bak-End Developer", 200, 2),
  ("Sales person", 100, 3),
  ("Accountant", 200, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("Nikki", "Morgan", 1, NULL),
  ("Mike", "Baker", 2, NULL),
  ("BJ", "Benson", 3, 2),
  ("Kathy", "Smith", 4, NULL),
  ("Jana", "Filiben", 5, NULL);