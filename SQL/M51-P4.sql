USE lco_films;
SHOW TABLES;
DESC city;

-- selecting cities with the largest and smallest names
SELECT city, length(city) as len FROM city ORDER BY len, city ASC limit 1;
SELECT city, length(city) as len FROM city ORDER BY len DESC, city limit 1;

-- write a query identifying the type of each record in the triangles tab;e using its 3 sides lengths. output its type
USE db1;
CREATE TABLE triangle (A INT, B INT, C INT);
INSERT INTO triangle (A, B, C) 
VALUES 
	(10, 20, 30), 
	(10, 10, 20), 
	(20, 20, 20),
	(20, 20, 10), 
	(20, 30, 40); 
ALTER TABLE triangle ADD id INT NOT NULL auto_increment primary key;
SELECT * FROM triangle;

SELECT A, B, C,
CASE
WHEN A + B > C AND B + C > A AND A + C > B THEN
	CASE
		WHEN A = B AND B = C THEN 'EQUILATERAL'
        WHEN A = B OR B = C OR A = C THEN 'ISOCELES'
        ELSE 'SCALENE'
    END
    ELSE 'Not a triangle' 
END AS triangle_type
FROM triangle; -- full output i am not getting


/*
1. Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first letter of each profession as a parenthetical (Le.: enclosed in parentheses). For example: AnActor Name (A), ADoctorName (D). AProfessorName (P), and ASinger Name (S).
2. Query the number of ocurrences of each occupation in OCCUPATIONS. Sort the occurrences in ascending order, and output them in the following format:
There are a total of [occupation_count] [occupation]s.
where [occupation_count] is the number of occurrences of an occupation in OCCUPATIONS and [occupation] is the lowercase occupation name. If more than one Occupation has the same [occupation_count], they should be ordered alphabetically. 
*/

CREATE TABLE OCCUPATIONS (
    name VARCHAR(100),
    occupation VARCHAR(50)
);

INSERT INTO OCCUPATIONS (name, occupation) VALUES
('Alice', 'Actor'),
('Bob', 'Doctor'),
('Charlie', 'Professor'),
('David', 'Singer'),
('Edward', 'Actor'),
('Fiona', 'Doctor'),
('George', 'Professor'),
('Hannah', 'Singer');

SELECT concat(name, "(",substr(occupation,1,1),")") FROM occupations ORDER BY name;
SELECT "There are a total of ", count(occupation), concat(occupation, "s.") FROM occupations GROUP BY occupation ORDER BY COUNT(occupation);

/*
Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee 
having a salary greater than $2000 per month who have been employees for less than 10 months. 
Sort your result by ascending employee_id
*/

CREATE TABLE Employee (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);
INSERT INTO Employee (name, salary, hire_date) VALUES
('John Doe', 2500.00, '2023-01-15'),
('Jane Smith', 1800.00, '2024-04-10'),
('Jim Brown', 2200.00, '2024-06-20'),
('Emily Davis', 3000.00, '2023-02-28'),
('Michael Wilson', 1900.00, '2024-08-05');

DESC EMPLOYEE;
SELECT employee_id,name,salary FROM Employee WHERE salary >= 2000 AND hire_date >= date_sub(curdate(), INTERVAL 10 MONTH) ORDER BY employee_id ASC;

UPDATE Employee 
SET hire_date = "2024-04-20" 
WHERE employee_id = 1;

