

-- DROP DATABASE IF EXISTS complete_company_db;
-- CREATE DATABASE complete_company_db;

-- USE complete_company_db;



-- CREATE TABLE department (
--   id INT NOT NULL AUTO_INCREMENT ,
--   department_name VARCHAR(30) ,
--   PRIMARY KEY (id)
-- );


-- CREATE TABLE roles (
--     id INT NOT NULL AUTO_INCREMENT,
--     title VARCHAR(30),
--     salary DECIMAL (10,2),
--     department_id INT,
--     Primary KEY (id),
--     FOREIGN KEY (department_id )
--     REFERENCES department(id)
--     ON DELETE SET NULL
-- );




-- CREATE TABLE employees (
--     id INT NOT NULL AUTO_INCREMENT,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     roles_id INT,
--     manager_id INT,
--     PRIMARY KEY (id),
--     FOREIGN KEY (roles_id)
--     REFERENCES roles(id)
--     ON DELETE SET NULL,
--     FOREIGN KEY (manager_id)
--     REFERENCES employees(id)
--     ON DELETE SET NULL
-- );



DROP DATABASE IF EXISTS complete_company_db;
CREATE DATABASE complete_company_db;

USE complete_company_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  department_name VARCHAR(30)  
 
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL  (10,2) ,
    department_id INT,
    FOREIGN KEY (department_id )
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    manager_id INT,
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);


SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;