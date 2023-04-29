-- insert sample data in this file


 

INSERT INTO department(department_name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales"),
        ("Service"),
        ("Health");




INSERT INTO role(title, salary, department_id)
VALUES  ("Lead Motivator, 100000, 6"),
        ("Scientific Stallion, 200000, 6"),
        ("Name Negotiator, 700000, 6"),
        ("Resident Emo, 50000, 2"),
        ("Sales Person, 230000, 4"),
        ("Accountant, 329399, 2"),
        ("Manager, 473933, 3"),
        ("Assistant, 484933, 5"),
        ("Front-End Softwarer Engineer, 234248, 1"),
        ("Back-End Softwarer Engineer, 484848, 1"),
        ("Janitor, 80000,5"),
        ("lawyer, 100000, 3");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
  ("Liam", "Gonzalez", 1, 13),
  ("Ava", "Rodriguez", 4, 2),
  ("Mateo", "Reyes", 3, 1),
  ("Emma", "Ortiz", 4, null),
  ("Avery", "Gomez", 4, 4),
  ("Camila", "Perez", 5, null),
  ("Ethan", "Garcia", 6, 7),
  ("Evelyn", "Sanchez", 4, 8),
  ("Sofia", "Martinez", 4, 10),
  ("Benjamin", "Gonzalez", 9, null),
  ("Avery", "Hernandez", 5, 11),
  ("Isabella", "Martinez", 6, 13),
  ("Noah", "Davis", 1, null),
  ("Lila", "Garcia", 3, 1),
  ("Logan", "Gonzalez", 2, 12),
  ("Mia", "Garcia", 4, 19),
  ("Elijah", "Ramirez", 5, null),
  ("Elena", "Gomez", 4, 2),
  ("Jacob", "Gonzalez", 5, ),
  ("Madison", "Taylor", 6, null),
  ("Liam", "Vasquez", 3, 25),
  ("Aiden", "Martinez", 4, 12),
  ("Aria", "Gonzalez", 1, 7),
  ("Ethan", "Perez", 5, 10);

   
        
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employees;