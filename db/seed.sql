INSERT INTO department(department_name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales"),
        ("Service"),
        ("Health");

INSERT INTO roles(title, salary, department_id)
VALUES  ("Lead Motivator", 100000, 6),
        ("Scientific Stallion", 200000, 6),
        ("Name Negotiator", 700000, 6),
        ("Resident Emo", 50000, 2),
        ("Sales Person", 230000, 4),
        ("Accountant", 329399, 2),
        ("Manager", 473933, 3),
        ("Assistant", 484933, 5),
        ("Front-End Softwarer Engineer", 234248, 1),
        ("Back-End Softwarer Engineer", 484848, 1),
        ("Janitor", 80000, 5),
        ("Lawyer", 100000, 3);

-- Insert managers first
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
  ("Liam", "Gonzalez", 1, NULL),
  ("Benjamin", "Gonzalez", 3, NULL),
  ("Isabella", "Martinez", 6, NULL);

-- Insert employees with managers
INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
  ("Ava", "Rodriguez", 8, 2),
  ("Mateo", "Reyes", 8, 1),
  ("Emma", "Ortiz", 9, 1),
  ("Avery", "Gomez", 11, 1),
  ("Camila", "Perez", 5, 1),
  ("Ethan", "Garcia", 6, 3),
  ("Evelyn", "Sanchez", 4, 2),
  ("Sofia", "Martinez", 4, 3),
  ("Avery", "Hernandez", 12, 3),
  ("Noah", "Davis", 1, 1),
  ("Lila", "Garcia", 9, 1),
  ("Logan", "Gonzalez", 2, 3),
  ("Mia", "Garcia", 9, 3),
  ("Elijah", "Ramirez", 5, 1),
  ("Elena", "Gomez", 12, 2),
  ("Jacob", "Gonzalez", 7, 2),
  ("Madison", "Taylor", 6, 3),
  ("Liam", "Vasquez", 10, 3),
  ("Aiden", "Martinez", 4, 3),
  ("Aria", "Gonzalez", 11, 1),
  ("Ethan", "Perez", 12, 3);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;