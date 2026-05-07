CREATE DATABASE student_management;

USE student_management;

CREATE TABLE students (

    student_id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(100),

    email VARCHAR(100),

    phone VARCHAR(20),

    course VARCHAR(100),

    address TEXT

);

INSERT INTO students(name,email,phone,course,address)
VALUES
('Naveen','naveen@gmail.com','9398335795','B.Tech CSE','Vijayawada'),
('Rahul','rahul@gmail.com','9876543210','BCA','Hyderabad');