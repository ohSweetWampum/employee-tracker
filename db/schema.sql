


DROP DATABASE IF EXISTS complete_company_db;
CREATE DATABASE complete_company_db;

USE complete_company_db;
DROP TABLE IF EXISTS department;
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  department_name VARCHAR(30)  
 
);
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    department_id INT,
    salary DECIMAL  (10,2) ,
    
    FOREIGN KEY (department_id )
    REFERENCES department(id)
    ON DELETE SET NULL
);
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
   
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
    
);


SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;