CREATE DATABASE IF NOT EXIST productsdb;
USE productsdb:
CREATE TABLE products (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (45) DEFAULT NULL,
    price INT (5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE products;

INSERT INTO products VALUES
(1, 'Bolso', 3000),
(2, 'Billetera', 7000),
(3, 'Correa', 7000),
(4, 'Monedero', 7000),
(5, 'Piel', 7000)

