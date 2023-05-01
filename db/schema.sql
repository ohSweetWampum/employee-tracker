

DROP DATABASE IF EXISTS complete_company_db;
CREATE DATABASE complete_company_db;

USE complete_company_db;



CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT ,
  department_name VARCHAR(30) ,
  PRIMARY KEY (id)
);


CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL (7,2),
    department_id INT,
    Primary KEY (id),
    FOREIGN KEY (department_id )
    REFERENCES department(id)
    ON DELETE SET NULL
);




CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT ,
    first_name VARCHAR(30) ,
    last_name VARCHAR(30) ,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);



